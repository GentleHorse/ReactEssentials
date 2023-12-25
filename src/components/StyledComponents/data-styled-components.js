export const STYLED_COMPONENTS = {
  installation: {
    title: "Installation",
    description:
      "To download styled-components run:",
    code: `npm install styled-components`,
  },
  useDynamicValues: {
    title: "Use dynamic values",
    description:
      "styled-components lets you write actual CSS in your JavaScript and it automatically forwards props, which means you can wrap child elements inside styled-components, add built-in props such as 'className', 'onChange', 'type', etc. You can also dynamically inject values inside styled-components by passing custom props (in below case, it is '$invalid={emailNotValid} & $invalid={passwordNotValid}'). You had better to add '$' in front of custom props when its name conflicts built-in props.",
    code: `
import { styled } from "styled-components";

const ControlContainer = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
\`;

const Label = styled.label\`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: \${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
\`;

const Input = styled.input\`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: \${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
  color: \${({ $invalid }) => ($invalid ? "#ef4444" : "#374151")};
  border: 1px solid \${({ $invalid }) => ($invalid ? "#f73f3f" : "transparent")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
\`;

<ControlContainer>
  <p className="paragraph">
    <Label $invalid={emailNotValid}>Email</Label>
    <Input
      $invalid={emailNotValid}
      type="email"
      onChange={(event) => handleInputChange("email", event.target.value)}
    />
  </p>
  <p>
    <Label $invalid={passwordNotValid}>Password</Label>
    <Input
      $invalid={passwordNotValid}
      type="password"
      onChange={(event) =>
        handleInputChange("password", event.target.value)
      }
    />
  </p>
</ControlContainer>  
  `,
  },
  pseudoSelectorsNestedRulesMediaQueries: {
    title: "Pseudo Selectors, Nested Rules, Media Queries",
    description:
      "For pseudo selectors, nested rules, media queries, you need to replace 'className' with '&'.",
    code: `
import { styled } from "styled-components";

import logo from "../assets/logo.png";

const StyledHeader = styled.header\`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }
  
  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: 'Pacifico', cursive;
    margin: 0;
  }
  
  & p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  
    & h1 {
      font-size: 2.25rem;
    }
  }
\`;

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </StyledHeader>
  );
}
`,
  },
  reusableStyleComponents: {
    title: "Reusable style components",
    description:
      "syled-components are components like React components, so you can make it reusable style component.",
    code: `
--->> App.jsx <<---------------------------------------------------

import Button from "./UI/Button.jsx";
import Input from "./UI/Input.jsx";

const ControlContainer = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
\`;

...

return (
    <div id="auth-inputs">
      <ControlContainer>
        <Input
          label="Email"
          invalid={emailNotValid}
          type="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <Input
          label="Password"
          invalid={passwordNotValid}
          type="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );

--->> Button.jsx <<------------------------------------------------

import { styled } from "styled-components";

const Button = styled.button\`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  &:hover {
    background-color: #f0920e;
  }
\`;

export default Button;

--->> Input.jsx <<-------------------------------------------------

import { styled } from "styled-components";

const Label = styled.label\`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
\`;

const Input = styled.input\`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
  color: ${({ $invalid }) => ($invalid ? "#ef4444" : "#374151")};
  border: 1px solid ${({ $invalid }) => ($invalid ? "#f73f3f" : "transparent")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
\`;

export default function CustomInput({label, invalid, ...props}) {
    return (
        <p>
            <Label $invalid={invalid} >{label}</Label>
            <Input $invalid={invalid} {...props} />
        </p>
    );
}
`,
  },
}