import { styled } from "styled-components";

const TabContentContainer = styled.div`
  padding: 2rem 0rem;
  border-radius: 6px;
  background: none;

  & h3 {
    margin: 0;
  }

  & code {
    font-size: 0.9rem;
  }
`;

export default function TabContent({ children }) {
  return <TabContentContainer>{children}</TabContentContainer>;
}

// background: linear-gradient(
//   40deg,
//   #003d0688,
//   #00530c88,
//   #0055ff88,
//   #0213ff88
// );

// box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

// backdrop-filter: blur(6px);
