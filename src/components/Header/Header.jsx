import { styled } from "styled-components";

import reactImage from "../../assets/react-core-concepts.png";

const HeaderContainer = styled.header`
  text-align: center;
  margin: 3rem 0;

  & img {
    height: 10rem;
    width: 20rem;
    object-fit: cover;
  }
  
  & h1 {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 5rem;
    background: linear-gradient(40deg, #00ff1a, #00ff26, #03d5ff, #03d5ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
  }
  
  & p {
    margin: 0;
    font-size: 1.25rem;
    color: #6ab064;
    font-family: 'Raleway', sans-serif;
  }
`

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
function generateRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[generateRandomInt(2)];

  return (
    <HeaderContainer>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </HeaderContainer>
  );
}
