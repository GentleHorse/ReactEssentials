export const REDUX_WITH_REACT_02 = {
  attachingPayload: {
    title: "Attaching payloads to actions",
    description:
      "For reducer functions, you can payload to actions for more flexibility. In the below example, “amount” is the payload for the action.",
    code: `
// store > index.js -----------------------------------------

const counterReducer = (state = { counter: 0 }, action) => {
  
  ....

  if (action.type === "increse") {
    return {
      counter: state.counter + action.amount,
    };
  }

  ....
  
};

// the component ----------------------------------------------

const increaseHandler = () => {
  dispatch({ type: "increse", amount: 5 });
};

....

  <button onClick={increaseHandler}>Increse by 5</button>
  
....
  `,
  },
  workingWithMultipleStateProperties: {
    title: "Working with multiple state properties",
    description:
      "If there’re multiple state properties, you need to return all of them inside the reducer function (in below case, “counter” & “showCounter”) because redux (react) doesn’t merge them automatically for you (technically, it overrides the old state properties instead of merging them).  And you MUST NOT MUTATE THE EXISTING STATE PROPERTIES (which might cause unpredictable behaviours)!!  Note that everytime one of the state properties changes, the component gets re-rendered. ",
    code: `
// store > index.js -----------------------------------------

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increse") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

....


// the component ----------------------------------------------

const showCounter = useSelector((state) => state.showCounter);

....

  const toggleCounterHandler = () => {
  dispatch({ type: "toggle" });
};

....

  <div className={classes.value}>{showCounter && counter}</div>
  
....	

  `,
  },
};
