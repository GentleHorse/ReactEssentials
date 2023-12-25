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
