export const CLASS_BASED_COMPONENTS = {
  whatIsIt: {
    title: "What is it?",
    description:
      "Class based components are still supported by React, but it is not recommend using them in new code. To define a React component as a class, extend the built-in Component class and define “a render method”. Props are accessible with “this” keywords. In addition, you can not use React hooks with class based components. Here is a comparison to function components.",
    code: `
import { Component } from "react";

class User extends Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

export default User;

-------------------------------------

const User = (props) => {
  return <li>{props.name}</li>;
};

export default User;
`,
  },
  statesAndHandlers: {
    title: "States and handlers",
    description:
      "You can not use useState for state management with class based component, thus you need to deal with state management in a different way; constructor(). With class based component, state must be ONE OBJECT and in order to change the value of state, you have to use setState(). This function DOES NOT OVERRIDE state, instead behind the scenes it MERGES old state and new state. When you register the handler function to HTML properties such as onClick(), you MUST USE bind(this) method or arrow function.",
    code: `
import { Component } from "react";

const DUMMY_USERS = [ //... ];

class Users extends Component {

  // 1) state initialization
  constructor() {

    super();

    this.state = {
      showUsers: true,
    };

  }

  // 2) Handler to manage the state
  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  // 3) Render + pass handler to button click
  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div>
        {/* <button onClick={() => this.toggleUsersHandler()}> */}
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

------------------------------------------------------------------

const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div>
      <button onClick={toggleUsersHandler}>
        {showUsers ? "Hide" : "Show"} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;
`,
  },
  sideEffects: {
    title: "Side effects, replacement functions of useEffect()",
    description:
      "With class based components, you cannot use useEffect(). Instead you have to use componentDidMount(): when mounted <——> useEffect(…, []), componentDidUpdate(): when updated <——> useEffect(…, [someValue]), componentWillUnmount(): when destroyed <——> useEffect(() ⇒ { return () ⇒ {}}, []). ",
    code: `
// At initial render
componentDidMount() {

  // ... Send http request here, for example ...

  this.setState({ filteredUsers: DUMMY_USERS });
}

// At every target variable change
componentDidUpdate(prevProps, prevState) {
  if (prevState.searchTerm !== this.state.searchTerm) {
    this.setState({
      filteredUsers: DUMMY_USERS.filter((user) =>
        user.name.includes(this.state.searchTerm)
      ),
    });
  }
}

-------------------------------------------------------

useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);
`,
  },
  contextAPI: {
    title: "Context API",
    description:
      "With class based components, you can still use createContext() to create a context and wrap around child components with SomeContext.Provider to enable them to use the context, however you cannot use useContext() inside child components. Instead you need to define the context with “static contextType = SomeContext”. Then you can access the context value by “this.contex.someValue”.",
    code: `
import { createContext } from "react";

const UsersContext = createContext({
  users: [],
});

export default UsersContext;

---------------------------------------

const usersContext = { ... }

...

<UsersContext.Provider value={usersContext}>
    <UserFinder />
</UsersContext.Provider>

---------------------------------------

class UserFinder extends Component {

  static contextType = UsersContext;
  
  constructor() { ... }
  
  
  componentDidMount() {
  
    this.setState({ filteredUsers: this.context.users });
  }
  
  
  render() {
    return (
      <>
        <div>
          <input type="search" />
        </div>
        <Users />
      </>
    );
  }
}

export default UserFinder;
`,
  },
  errorBoundary: {
    title: "Error boundary",
    description:
      "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.",
    code: `
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error)
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

------------------------------------------

<ErrorBoundary>
  <Users />
</ErrorBoundary>
`,
  },
}