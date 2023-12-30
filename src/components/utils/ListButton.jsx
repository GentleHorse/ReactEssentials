import { styled } from "styled-components";

export default function ListButton({ children, ...props }) {
  const Button = styled.button`
    width: 100%;
    text-align: left;
    font-size: 0.8rem;
    line-height: 1.25rem; 
    padding: 0.3rem 0.75rem;
    margin: 0.25rem 0;
    border: none;
    border-radius: 0.5rem;
    text-decoration: none;
    cursor: pointer;
    background: rgba(15, 23, 42, 0.8);
    color: rgb(203 213 225);
    transition: all 0.2s ease-in-out;

    &:hover {
        background: rgba(30, 41, 59, 0.8);
        color: rgb(255 255 255);
        font-size: 0.9em;
    }
  `;

  return (
    <li>
      <Button {...props}>{children}</Button>
    </li>
  );
}
