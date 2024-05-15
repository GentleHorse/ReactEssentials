import { styled } from "styled-components";

import ListButton from "./utils/ListButton.jsx";

export default function SideBar({ onSelect, selectedContent }) {
  const Aside = styled.aside`
    width: 13rem;
    height: 200vh;
    padding: 2rem 0.5rem 2rem 1rem;
    margin-left: 0;
    background: linear-gradient(
      -90deg,
      #003d0620,
      #00530c66,
      #0055ff88,
      #0213ff44
    );
    color: rgb(245 245 244);
    backdrop-filter: blur(4px);
    border-radius: 0 0.75rem 0.75rem 0;
  `;

  const ListContainer = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
  `;

  return (
    <Aside>
      <ListContainer>
        <ListButton
          onClick={() => onSelect("coreConcept")}
          style={{
            color: selectedContent === "coreConcept" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          Core concept
        </ListButton>

        <ListButton
          onClick={() => onSelect("setup")}
          style={{
            color: selectedContent === "setup" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          Set up
        </ListButton>

        <ListButton
          onClick={() => onSelect("useEffect")}
          style={{
            color: selectedContent === "useEffect" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          useEffect
        </ListButton>

        <ListButton
          onClick={() => onSelect("useCallback")}
          style={{
            color: selectedContent === "useCallback" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          useCallback
        </ListButton>

        <ListButton
          onClick={() => onSelect("useRef")}
          style={{
            color: selectedContent === "useRef" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          useRef
        </ListButton>

        <ListButton
          onClick={() => onSelect("useState")}
          style={{
            color: selectedContent === "useState" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          useState
        </ListButton>

        <ListButton
          onClick={() => onSelect("props")}
          style={{
            color: selectedContent === "props" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          props
        </ListButton>

        <ListButton
          onClick={() => onSelect("contextAPI")}
          style={{
            color: selectedContent === "contextAPI" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          contextAPI
        </ListButton>

        <ListButton
          onClick={() => onSelect("useReducer")}
          style={{
            color: selectedContent === "useReducer" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          useReducer
        </ListButton>

        <ListButton
          onClick={() => onSelect("useMemo")}
          style={{
            color: selectedContent === "useMemo" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          useMemo
        </ListButton>

        <ListButton
          onClick={() => onSelect("builtInReactComponents")}
          style={{
            color:
              selectedContent === "builtInReactComponents"
                ? "#FCFAF2"
                : "#FCFAF265",
          }}
        >
          builtInReactComponents
        </ListButton>

        <ListButton
          onClick={() => onSelect("CSSStyling")}
          style={{
            color: selectedContent === "CSSStyling" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          CSSStyling
        </ListButton>

        <ListButton
          onClick={() => onSelect("styledComponents")}
          style={{
            color:
              selectedContent === "styledComponents" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          styledComponents
        </ListButton>

        <ListButton
          onClick={() => onSelect("tailwindCSS")}
          style={{
            color: selectedContent === "tailwindCSS" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          tailwindCSS
        </ListButton>

        <ListButton
          onClick={() => onSelect("mouseEvents")}
          style={{
            color: selectedContent === "mouseEvents" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          mouseEvents
        </ListButton>

        <ListButton
          onClick={() => onSelect("dragEvents")}
          style={{
            color: selectedContent === "dragEvents" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          dragEvents
        </ListButton>

        <ListButton
          onClick={() => onSelect("TIPS")}
          style={{
            color: selectedContent === "TIPS" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          TIPS
        </ListButton>

        <ListButton
          onClick={() => onSelect("classBasedComponents")}
          style={{
            color:
              selectedContent === "classBasedComponents"
                ? "#FCFAF2"
                : "#FCFAF265",
          }}
        >
          classBasedComponents
        </ListButton>

        <ListButton
          onClick={() => onSelect("errorHandling")}
          style={{
            color:
              selectedContent === "errorHandling" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          Error handling
        </ListButton>

        <ListButton
          onClick={() => onSelect("customHooks")}
          style={{
            color: selectedContent === "customHooks" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          Custom hooks
        </ListButton>

        <ListButton
          onClick={() => onSelect("formsAndUserInputs")}
          style={{
            color:
              selectedContent === "formsAndUserInputs"
                ? "#FCFAF2"
                : "#FCFAF265",
          }}
        >
          Forms and user inputs
        </ListButton>

        <ListButton
          onClick={() => onSelect("resetUserInputs")}
          style={{
            color:
              selectedContent === "resetUserInputs" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          Reset user inputs
        </ListButton>

        <ListButton
          onClick={() => onSelect("inputValidation")}
          style={{
            color:
              selectedContent === "inputValidation" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          Input validation
        </ListButton>

        <ListButton
          onClick={() => onSelect("reduxIntro")}
          style={{
            color: selectedContent === "reduxIntro" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          Redux intro
        </ListButton>

        <ListButton
          onClick={() => onSelect("reduxWithReact01")}
          style={{
            color:
              selectedContent === "reduxWithReact01" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          Redux with React - 1
        </ListButton>

        <ListButton
          onClick={() => onSelect("reduxWithReact02")}
          style={{
            color:
              selectedContent === "reduxWithReact02" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          Redux with React - 2
        </ListButton>

        <ListButton
          onClick={() => onSelect("reduxToolkit")}
          style={{
            color: selectedContent === "reduxToolkit" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          Redux Toolkit
        </ListButton>

        <ListButton
          onClick={() => onSelect("reduxAdvanced")}
          style={{
            color:
              selectedContent === "reduxAdvanced" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          Redux advanced
        </ListButton>

        <ListButton
          onClick={() => onSelect("reactRouter01")}
          style={{
            color:
              selectedContent === "reactRouter01" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          React Router - 1
        </ListButton>

        <ListButton
          onClick={() => onSelect("reactRouter02")}
          style={{
            color:
              selectedContent === "reactRouter02" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          React Router - 2
        </ListButton>

        <ListButton
          onClick={() => onSelect("reactRouter03")}
          style={{
            color:
              selectedContent === "reactRouter03" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          React Router - 3
        </ListButton>

        <ListButton
          onClick={() => onSelect("reactRouter04")}
          style={{
            color:
              selectedContent === "reactRouter04" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          React Router - 4
        </ListButton>

        <ListButton
          onClick={() => onSelect("reactRouter05")}
          style={{
            color:
              selectedContent === "reactRouter05" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          React Router - 5
        </ListButton>

        <ListButton
          onClick={() => onSelect("reactRouter06")}
          style={{
            color:
              selectedContent === "reactRouter06" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          React Router - 6
        </ListButton>

        <ListButton
          onClick={() => onSelect("reactRouter07")}
          style={{
            color:
              selectedContent === "reactRouter07" ? "#FCFAF2" : "#FCFAF265",
          }}
        >
          React Router - 7
        </ListButton>

      </ListContainer>
    </Aside>
  );
}
