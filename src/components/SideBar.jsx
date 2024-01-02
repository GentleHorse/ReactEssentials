import { styled } from "styled-components";

import ListButton from "./utils/ListButton.jsx";

export default function SideBar({ onSelect }) {
  const Aside = styled.aside`
    width: 20rem;
    height: 48.5rem;
    padding: 0.5rem 2rem 1rem 2rem;
    margin-left: 2rem;
    background: linear-gradient(
      -90deg,
      #003d0620,
      #00530c66,
      #0055ff88,
      #0213ff44
    );
    color: rgb(245 245 244);
    backdrop-filter: blur(4px);
    // border-top-right-radius: 0.75rem;
    // border-bottom-right-radius: 0.75rem;
    border-radius: 0.75rem;
  `;

  const Header = styled.h2`
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    color: rgb(231 229 228);
  `;

  const ListContainer = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
  `;

  return (
    <Aside>
      <Header>Table of contents</Header>
      <ListContainer>
        <ListButton onClick={() => onSelect("coreConcept")}>Core concept</ListButton>
        <ListButton onClick={() => onSelect("setup")}>Set up</ListButton>
        <ListButton onClick={() => onSelect("useEffect")}>useEffect</ListButton>
        <ListButton onClick={() => onSelect("useCallback")}>useCallback</ListButton>
        <ListButton onClick={() => onSelect("useRef")}>useRef</ListButton>
        <ListButton onClick={() => onSelect("useState")}>useState</ListButton>
        <ListButton onClick={() => onSelect("props")}>props</ListButton>
        <ListButton onClick={() => onSelect("contextAPI")}>Context API</ListButton>
        <ListButton onClick={() => onSelect("useReducer")}>useReducer</ListButton>
        <ListButton onClick={() => onSelect("useMemo")}>useMemo</ListButton>
        <ListButton onClick={() => onSelect("builtInReactComponents")}>
          Built-in React component
        </ListButton>
        <ListButton onClick={() => onSelect("CSSStyling")}>CSS Styling</ListButton>
        <ListButton onClick={() => onSelect("styledComponents")}>styled-components</ListButton>
        <ListButton onClick={() => onSelect("tailwindCSS")}>Tailwind CSS</ListButton>
        <ListButton onClick={() => onSelect("mouseEvents")}>Mouse evenets</ListButton>
        <ListButton onClick={() => onSelect("dragEvents")}>Drag events</ListButton>
        <ListButton onClick={() => onSelect("TIPS")}>TIPS</ListButton>
        <ListButton onClick={() => onSelect("classBasedComponents")}>Class based components</ListButton>

      </ListContainer>
    </Aside>
  );
}


