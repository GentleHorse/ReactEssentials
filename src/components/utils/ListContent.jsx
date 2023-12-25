import { styled } from "styled-components";

const ListContentContainer = styled.div`
  padding: 1rem;
  border-radius: 6px;
  background: linear-gradient(
    40deg,
    #003d0688,
    #00530c88,
    #0055ff88,
    #0213ff88
  );
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;

const ListContentList = styled.ul`
  list-style: none;
  padding: auto;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: left;

  & li {
    width: 15rem;
    text-align: left;
  }

  & h3 {
    color:rgb(247, 160, 9);
  }
`

export default function ListContent({ children }) {
  return (
    <ListContentContainer>
      <ListContentList>{children}</ListContentList>
    </ListContentContainer>
  );
}
