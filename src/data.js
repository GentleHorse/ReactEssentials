import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

/**
* Core Concepts
*/
export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];

/**
* Examples
*/
export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};

/**
* Setup
*/
export const SETUP = {
  npx: {
    title: "npx",
    description:
      "Using npx to create a react application.",
    code: `npx create-react-app`,
  },

  fromScratch: {
    title: "from Scratch",
    description:
      "Creating a react application from scratch by 1)initializing 'package.json' file, 2)installing 'react' & 'react-dom' & 'react-scripts', 3)cleaning up 'package.json', 4)creating 'public' folder and create 'index.html' inside of it by typing shortcut key 'i', 5)adding <div id='root'> inside <body>, 6)creating 'src' folder and creating 'index.jsx' inside of it",
    code: `
1) terminal ---------------------------------------

    npm init -y

2) terminal --------------------------------------- 

    npm install react@latest react-dom@latest react-scripts@latest

3) package.json -----------------------------------

    "scripts": {
      "dev": "react-scripts start",
      "build": "react-scripts build"
    },

4) index.html inside public folder -----------------

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>

5) index.html inside public folder -----------------

    <body>
        <div id="root"></div>
    </body>

6) index.jsx inside src folder ---------------------

    import { createRoot } from "react-dom/client";

    const root = createRoot(document.querySelector("#root"));

    root.render(
      <h1>Hello React</h1>
    );
`,
  },

  withVite: {
    title: "with Vite",
    description:
      "Using Vite to create a application. You need to select 'React' framework and 'JavaScript' variant",
    code: `
    npm create vite@latest

    cd <project name>

    npm install

    npm run dev
    `,
  },
};

/**
* State Use Cases
*/
export const STATE_USE_CASES = {
  switchingTabButtons: {
    title: "Switching tab buttons",
    description:
      "Passing an identifier(= selectedButton) to clickEventHandler(= selectHandler) to control the tab content and css style by monitoring which button is selected.",
    code: `
--->> App.jsx <<----------------------------------------

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  ...

  return (

        ...

        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            onClick={() => selectHandler("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onClick={() => selectHandler("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onClick={() => selectHandler("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onClick={() => selectHandler("state")}
          >
            State
          </TabButton>
        </menu>

        ...

--->> TabButton.jsx <<--------------------------------

export default function TabButton({ children, onSelect, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

--->> index.css <<-------------------------------------

#examples menu button.active {
  background-color: #25d325;
  color: #e7eaef;
}

`,
  },
  updatingStateBasedOnOldState: {
    title: "Updating state based on old state",
    description:
      "Pass a function to the state updating function. This function will automatically be called by React and will receive the guranteed latest state value. You need to call a function inside the state updating function(= setIsToggle()) because state WILL NOT INSTANTLY BE UPDATED since React set scheduling. Thus, 'setIsToggle(!isToggle)' is wrong!!",
    code: `
export default function App() {
  const [isToggle, setIsToggle] = React.useState(false);
  
  const toggleHandler = () => {
      setIsToggle(isToggle => !isToggle);
  }
  
  return (
      <div>
          <p className={isToggle ? "active" : ""}>Style me!</p>
          <button onClick={toggleHandler}>Toggle style</button>
      </div>
  );
}
`,
  },
  twoWayBinding: {
    title: "Two-way binding",
    description:
      "Two-way binding gives components in your application a way to share data. Use two-way binding to listen for events and update values simultaneously between parent and child components.",
    code: `
--->> App.jsx <<---------------------------------------------------

import React from 'react';
import Review from './Review.js'

function App() {
    const [feedback, setFeedback] = React.useState();
    const [student, setStudent] = React.useState();
    
    const feedbackHandler = (event) => {
        setFeedback(event.target.value);
    }
    
    const studentHandler = (event) => {
        setStudent(event.target.value);
    }
    
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedback} onChange={feedbackHandler}/>
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={student} onChange={studentHandler} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={student} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App

--->> Review.jsx <<------------------------------------------------

export default function Review({ feedback, student }) {
  return (
    <figure>
      <blockquote>
        <p>{feedback}</p>
      </blockquote>
      <figcaption>{student}</figcaption>
    </figure>
  );
}

`,
  },
  updateObjectStateImmutably: {
    title: "Update object and array state immutably",
    description:
      "Objects & arrays (which technically are objects) are reference values in JavaScript. Therefore you should not mutate them directly, instead create a (deep) copy first! In below example, inside the selectSquarehandler function, ‘prevGameBoard’ is not mutated instead using its copy ‘updatedBoard’ for updating the state.",
    code: `
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const selectSquareHandler = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = "X";

      return updatedBoard;
    });
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => selectSquareHandler(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
`,
  },
  liftingStateUp: {
    title: "Lifting state up",
    description:
      "Lift the state up to the closest ancestor component (= App.jsx) that has access to all components (= Player.jsx, GameBoard.jsx) that need to work with that state (= activePlayer). Player.jsx uses that state for css styling and GameBoard.jsx does for game logic (switching symbols between 'X' and 'O' + fetching current active player symbol).",
    code: `
--->> App.jsx <<---------------------------------------------------------------

const [activePlayer, setActivePlayer] = useState("X");

  const selectSquareHandler = () => {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player-1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player-2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={selectSquareHandler}
          activePlayerSymbol={activePlayer}
        />
      </div>
      LOG
    </main>

--->> Player.jsx <<------------------------------------------------------------

return (
  <li className={isActive ? "active" : undefined}>
    <span className="player">
      {editablePlayerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={editNameHandler}>
      {isEditing ? "Save" : "Edit"}
    </button>
  </li>
);

--->> GameBoard.jsx <<---------------------------------------------------------

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const selectSquareHandler = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

      return updatedBoard;
    });

    onSelectSquare();
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => selectSquareHandler(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
`,
  },
  oneObjectStateOneChangeHandler: {
    title: "One object state and one change handler",
    description:
      "There's one object state which contains multiple 'key-value' pairs and one change handler, and if you want to update only one 'key-value' pair in correspondence with one of the identifiers, here's the answer.",
    code: `
/**
 * Object State
 */
  const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    });
  
/**
 * Change Handler
 */
  const changeHandler = (inputIdentifier, newValue) => {
    setUserInput((prevUseInput) => {
      return {
        ...prevUseInput,
        [inputIdentifier]: +newValue,  // "+" > string to number
      };
    });
  };
  
/**
 * JSX Renderer
 */
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>intial investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              changeHandler("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              changeHandler("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              changeHandler("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              changeHandler("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
`,
  },
}

/**
* Props Use Cases
*/
export const PROPS_USE_CASES = {
  forwardingExistingPropsId: {
    title: "Forwarding existing props 'id'",
    description:
      "If you create a wrapper component and want to use it with existing properties such as 'id', 'className' or 'onClick', you have to forward props by using …props to make them available.",
    code: `
--->> App.jsx <<---------------------------------------------------

return (
  <Section title="Examples" id="examples">
    
    ...
    
  </Section>
);

--->> Section.jsx <<-----------------------------------------------

export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
`,
  },
  forwardingExistingPropsOnClick: {
    title: "Forwarding existing props 'onClick'",
    description:
    "If you create a wrapper component and want to use it with existing properties such as 'id', 'className' or 'onClick', you have to forward props by using …props to make them available.",
    code: `
--->> App.jsx <<---------------------------------------------------

<TabButton
  isSelected={selectedTopic === "components"}
  onClick={() => selectHandler("components")}
>
  Components
</TabButton>

--->> TabButton.jsx <<-----------------------------------------------

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
} 
`,
  },
  creatingAdditionalSlot: {
    title: "Creating additional slot in addition to props.child",
    description:
      "Adding an additional slot to a wrapper component in addtion to 'props.child', you need to create custom props (in below example, it's 'buttons'). In this way, you can create as much slots as you want.",
      code: `
--->> App.jsx <<---------------------------------------------------

<Tabs
  buttons={
    <>
      <TabButton
        isSelected={selectedTopic === "components"}
        onClick={() => selectHandler("components")}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "jsx"}
        onClick={() => selectHandler("jsx")}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "props"}
        onClick={() => selectHandler("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "state"}
        onClick={() => selectHandler("state")}
      >
        State
      </TabButton>
    </>
  }
>
  {tabContent}
</Tabs>

--->> Tabs.jsx <<--------------------------------------------------

export default function Tabs({ children, buttons }) {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
`,
  },
  dynamicallyChangeHtmlElements: {
    title: "Dynamically change html elements",
    description:
      "Dynamically changable html elements to a wrapper component, you have to create custom props starting with a capital letter (in this case, it's 'ButtonsContainer) otherwise React treats it as a built-in html element and couse errors.",
      code: `
--->> App.jsx <<---------------------------------------------------

<Tabs 
  ButtonsContainer="menu"
  buttons={
    <>
      <TabButton
        isSelected={selectedTopic === "components"}
        onClick={() => selectHandler("components")}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "jsx"}
        onClick={() => selectHandler("jsx")}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "props"}
        onClick={() => selectHandler("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "state"}
        onClick={() => selectHandler("state")}
      >
        State
      </TabButton>
    </>
  }
>
  {tabContent}
</Tabs>

--->> Tabs.jsx <<--------------------------------------------------

export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
`,
  },
  dynamicallyChangeClassName: {
    title: "Dynamically change className for css styling",
    description:
      "In order to change className dynamically, create a className variable and add className in correspondance to props (Check out 'Button.jsx' file).",
      code: `
--->> App.jsx <<---------------------------------------------------

import Button from './Button';
import HomeIcon from './HomeIcon';
import PlusIcon from './PlusIcon';

function App() {
  return (
     <div id="app">
      <section>
        <h2>Filled Button (Default)</h2>
        <p>
          <Button>Default</Button>
        </p>
        <p>
          <Button mode="filled">Filled (Default)</Button>
        </p>
      </section>
      <section>
        <h2>Button with Outline</h2>
        <p>
          <Button mode="outline">Outline</Button>
        </p>
      </section>
      <section>
        <h2>Text-only Button</h2>
        <p>
          <Button mode="text">Text</Button>
        </p>
      </section>
      <section>
        <h2>Button with Icon</h2>
        <p>
          <Button Icon={HomeIcon}>Home</Button>
        </p>
        <p>
          <Button Icon={PlusIcon} mode="text">
            Add
          </Button>
        </p>
      </section>
      <section>
        <h2>Buttons Should Support Any Props</h2>
        <p>
          <Button mode="filled" disabled>
            Disabled
          </Button>
        </p>
        <p>
          <Button onClick={() => console.log('Clicked!')}>Click me</Button>
        </p>
      </section>
    </div>
  );
}

export default App;

--->> Button.jsx <<------------------------------------------------ 

export default function Button({children, mode="filled", Icon, ...props}) {
 
  let cssClasses = \`button \${mode}-button\`;
  
  if (Icon) {
      cssClasses += ' icon-button'
  }
  
  if (props.className) {
      cssClasses += ' ' + props.className;
  }
 
  
  return (
      <button className={cssClasses} {...props}>
      {Icon && (
          <span className="button-icon"><Icon/></span>
     )}
      <span>{children}</span>
      </button>
      );
 }

--->> index.css <<------------------------------------------------- 

.button {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
}

.icon-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.button-icon {
  width: 1rem;
  height: 1rem;
}

.filled-button {
  background: linear-gradient(#7fa1f7, #6085e4);
  color: #030a1b;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.filled-button:hover {
  background: linear-gradient(#89a9fb, #6890f6);
}

.filled-button:disabled {
  background: #a3a9b7;
  color: #3a445c;
  box-shadow: none;
  cursor: not-allowed;
}

.outline-button {
  border: 1px solid #2658d6;
  color: #2658d6;
}

.outline-button:hover {
  background: #cbd8fc;
}

.text-button {
  color: #2658d6;
}

.text-button:hover {
  background: #cbd8fc;
}

`,
  },
}

/**
* React Hooks
*/
export const REACT_HOOKS = {
  useState: {
    title: "useState",
    description:
      "Calling the set function does not change the current state in the already executing code. It only affects what useState will return starting from the next render. This means new state WILL NOT IMMEDIATELY be reflected.",
    code: `
const [name, setName] = useState('Taylor');

function handleClick() {
  setName('Robin');
  console.log(name); // Still "Taylor"!
}
`,
  },
  useEffectA: {
    title: "useEffect: case A",
    description:
      "Called at the initial render + every render",
    code: `
useEffect(() => {
  console.log("useEffect is called");
});
`,
  },
  useEffectB: {
    title: "useEffect: case B",
    description:
      "Called at only the initial render",
    code: `
useEffect(() => {
  console.log("useEffect is called");
}, []);


/**
 *  If you want to call a certain function 
 *  only when a component is disposed (removed), 
 *  use return function inside useEffect hook 
 * / 
 
useEffect(() => {
  console.log("useEffect is called");

  return () => {
      console.log("component disposed")
  }
}, []);
`,
  },
  useEffectC: {
    title: "useEffect: case C",
    description:
      "Called at the initial render and everytime depenancies are changed",
    code: `
useEffect(() => {
  console.log("useEffect is called");
}, [a, b]);
`,
  },
  useEffectD: {
    title: "useEffect: case D",
    description:
      "Store data in localStorage with useEffect",
    code: `
useEffect(() => {
  localStorage.setItem("count", count);
}, [count]);


/**
 *  Practical usage is below
 * / 

import { useEffect, useState } from "react";

function Clicker() {
  const [count, setCount] = useState(0);

  // called only at the initial render
  // set 'count' value if it exits
  useEffect(() => {
    // in case there's no data in localStorage,
    // use nullish coalescing operator('??')
    const savedCount = parseInt(localStorage.getItem("count") ?? 0);
    setCount(savedCount);
  }, []);

  // called at the initial render and the 'count' changed
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const buttonClick = () => {
    // use the below arrow function to fetch the latest value
    setCount((value) => value + 1);
  };

  return (
    <div>
      <div>Click count: {count}</div>
      <button onClick={buttonClick}>Click me</button>
    </div>
  );
}

export default Clicker;
`,
  },
  useMemo: {
    title: "useMemo",
    description:
      "useMemo needs a function as the first parameter and an array of dependencies as the second parameter (a bit like useEffect). In the function we need to return the desired value (in below case the colors array). If useMemo is being called again (when the App is being re-rendered), but the values in the dependencies array haven't changed, useMemo will return the previous array. And if one of the dependency values has changed, then useMemo will call the function again. In a way, useMemo works like a cache, and only a dependency value change can break it.",
    code: `
const colors = useMemo(() => {
  const colors = [];
  for (let i = 0; i < clickersCount; i++) {
    colors.push(\`hsl(\${Math.random() * 360}deg, 100%, 70%)\`);
  }

  return colors;

}, [clickersCount]);
`,
  },
  useRef: {
    title: "useRef",
    description:
      "It lets you reference a value that's not needed for rendering. You can access DOM element ONLY AFTER JSX is rendered, that's why playing inside useEffect (the initial render).",
    code: `
const buttonRef = useRef();

useEffect(() => {
  buttonRef.current.style.backgroundColor = 'papayawhip';
  buttonRef.current.style.color = 'salmon';

  return () => {
    localStorage.removeItem(keyName);
  };
}, []);

...

return (
  ...
    <button ref={buttonRef} onClick={buttonClick}>
      Click me
    </button>
  ...
);
`,
  },
};

/**
* Built-in React Components
*/
export const BUILT_IN_REACT_COMPONENTS = {
  suspense: {
    title: "Suspense",
    description:
      "<Suspense> lets you display a fallback until its children have finished loading.",
    code: `
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
`,
  },
  strictMode: {
    title: "StrictMode",
    description:
      "<StrictMode> lets you find common bugs in your components early during development.",
    code: `
<StrictMode>
  <App />
</StrictMode>
`,
  },
}