import { styled } from "styled-components";

import ListButton from "./utils/ListButton.jsx";

export default function SideBar({ onSelect, selectedContent }) {
  const Aside = styled.aside`
    width: 13rem;
    height: auto;
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
              selectedContent === "errorHandling"
                ? "#FCFAF2"
                : "#FCFAF265",
          }}
        >
          Error handling
        </ListButton>

        <ListButton
          onClick={() => onSelect("customHooks")}
          style={{
            color:
              selectedContent === "customHooks"
                ? "#FCFAF2"
                : "#FCFAF265",
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


      </ListContainer>
    </Aside>
  );
}
