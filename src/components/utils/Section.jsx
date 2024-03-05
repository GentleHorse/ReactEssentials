import { styled } from "styled-components";

export default function Section({ title, children, ...props }) {
  const SectionContainer = styled.section`    
    & h2 {
      margin: 0 0 2rem 0;
      text-align: left;
      font-size: 3rem;
      color: #25d325;
    }
    
    & menu {
      margin: 1rem 0;
      padding: 0;
      display: flex;
      gap: 0.5rem;
      list-style: none;
    }
    
    & menu button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 6px;
      background-color: transparent;
      color: #8aba91;
      font-family: 'Raleway', sans-serif;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
    
    & menu button:hover {
      background-color: #082f0e;
      color: #e7e7ef;
    }
    
    & menu button.active {
      background-color: #25d325;
      color: #e7eaef;
    }  
  `;

  return (
    <SectionContainer {...props}>
      <h2>{title}</h2>
      {children}
    </SectionContainer>
  );
}
