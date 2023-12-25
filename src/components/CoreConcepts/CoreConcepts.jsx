import { styled } from "styled-components";

import { CORE_CONCEPTS } from "./data-core-concepts.js";
import CoreConcept from "./CoreConcept";

const CoreConceptSectionContainer = styled.section`
  padding: 2rem;
  border-radius: 6px;
  background: linear-gradient(40deg, #003d0655, #00530c55, #0055ff55, #0213ff55);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);

  & h2 {
    text-align: center;
    font-family: 'Raleway', sans-serif;
    margin: 0 0 1.5rem 0;
    color: #8aba90;
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  & li {
    width: 10rem;
    text-align: center;
  }

  & li img {
    height: 4rem;
    width: 6rem;
    object-fit: cover;
  }

  & li h3 {
    margin: 0.5rem 0;
  }

  & li p {
    font-size: 0.9rem;
  }
`

export default function CoreConcepts() {
  return (
    <CoreConceptSectionContainer>
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </CoreConceptSectionContainer>
  );
}
