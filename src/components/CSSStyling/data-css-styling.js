export const CSS_STYLING = {
  inlineStyling: {
    title: "Inline styling",
    description:
      "For inline styling, you need to pass value as a format of OBJECT to style property. You can also use ternary expression inside the property.",
    code: `
<input
  type="email"
  style={{ backgroundColor: emailNotValid ? '#f87171' : '#d1d5db' }}
  onChange={(event) => handleInputChange('email', event.target.value)}
/>
`,
  },
  addingClassNameConditionally: {
    title: "Adding className conditionally",
    description:
      "For adding styles from a separated file conditionally to html elements, you need to use BACKTICKS + DOLLAR SIGN.",
    code: `<label className={\`label \${emailNotValid ? "invalid" : ""}\`}>Email</label>`,
  },
  CSSModules: {
    title: "CSS modules",
    description:
      "Vanilla CSS with file-specific scoping.",
    code: `
--->> Header.jsx <<---------------------------------------------------

import logo from "../assets/logo.png";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}

--->> Header.module.css <<--------------------------------------------

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

header img {
  object-fit: contain;
  margin-bottom: 2rem;
  width: 11rem;
  height: 11rem;
}

header h1 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.4em;
  text-align: center;
  text-transform: uppercase;
  color: #9a3412;
  font-family: 'Pacifico', cursive;
  margin: 0;
}

.paragraph {
  text-align: center;
  color: #a39191;
  margin: 0;
}

@media (min-width: 768px) {
  header {
    margin-bottom: 4rem;
  }

  header h1 {
    font-size: 2.25rem;
  }
}
`,
  },
}