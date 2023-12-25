export const SETUP = {
  npx: {
    title: "npx",
    description: "Using npx to create a react application.",
    code: `npx create-react-app`,
  },

  fromScratch: {
    title: "from Scratch",
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
    title: "with Vite",
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
