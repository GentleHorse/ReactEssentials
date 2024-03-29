import { styled } from "styled-components";

export default function ListButton({ children, ...props }) {
  const Button = styled.button`
    width: 100%;
    text-align: left;
    font-size: 0.8rem;
    line-height: 1.25rem;
    padding: 0.1rem 0.75rem;
    margin: 0.25rem 0;
    border: none;
    border-radius: 0.5rem;
    text-decoration: none;
    cursor: pointer;
    background: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: none;
      font-size: 0.9em;
    }
  `;

  return (
    <li>
      <Button {...props}>{children}</Button>
    </li>
  );
}
