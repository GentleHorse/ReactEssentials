import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

/**
* Core Concepts
*/
export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];

/**
* Examples
*/
export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};

/**
* Setup
*/
export const SETUP = {
  npx: {
    title: "npx",
    description:
      "Using npx to create a react application.",
    code: `npx create-react-app`,
  },

  fromScratch: {
    title: "fromScratch",
    description:
      "Creating a react application from scratch by 1)initializing 'package.json' file, 2)installing 'react' & 'react-dom' & 'react-scripts', 3)cleaning up 'package.json', 4)creating 'public' folder and create 'index.html' inside of it by typing shortcut key 'i', 5)adding <div id='root'> inside <body>, 6)creating 'src' folder and creating 'index.jsx' inside of it",
    code: `
1) terminal ---------------------------------------

    npm init -y

2) terminal --------------------------------------- 

    npm install react@latest react-dom@latest react-scripts@latest

3) package.json -----------------------------------

    "scripts": {
      "dev": "react-scripts start",
      "build": "react-scripts build"
    },

4) index.html inside public folder -----------------

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>

5) index.html inside public folder -----------------

    <body>
        <div id="root"></div>
    </body>

6) index.jsx inside src folder ---------------------

    import { createRoot } from "react-dom/client";

    const root = createRoot(document.querySelector("#root"));

    root.render(
      <h1>Hello React</h1>
    );
`,
  },

  withVite: {
    title: "withVite",
    description:
      "Using Vite to create a application. You need to select 'React' framework and 'JavaScript' variant",
    code: `
    npm create vite@latest

    cd <project name>

    npm install

    npm run dev
    `,
  },
};
