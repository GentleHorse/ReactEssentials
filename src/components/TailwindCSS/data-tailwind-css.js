export const TAILWIND_CSS = {
  installationWithVite: {
    title: "Installation with Vite",
    description:
      "You need to install Tailwind CSS, configure your template paths and add the Tailwind directives to your CSS. It iften requires re-initializing the server.",
    code: `
--->> terminal <<---------------------------------------------------

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

--->> tailwind.config.js <<-----------------------------------------

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

--->> index.css <<---------------------------------------------------

@tailwind base;
@tailwind components;
@tailwind utilities;

`,
  },
  howToUse: {
    title: "How to use",
    description:
      "You can use tailwind CSS by adding various className.",
    code: `
<header className="flex flex-col items-center mt-8 mb-16">
  <img src={logo} alt="A canvas" className="mb-8 w-44 h-44" />
  <h1 className="
      text-4xl 
      font-semibold 
      tracking-widest 
      text-center 
      uppercase 
      text-amber-800 
    "
  >
    ReactArt
  </h1>
  <p className="text-stone-500">
    A community of artists and art-lovers.
  </p>
</header>
`,
  },
  usingCustomFont: {
    title: "Using custom font",
    description:
      "Set up in tailwind.config.js by extending fontFamily property. One-word name should be wrapped with single quotation marks and two-words name should be with double quotation marks. Sometimes it requires re-initializing the server.",
    code: `
--->> tailwind.config.js <<-----------------------------------------

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto"', "sans-serif"],
        "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
        "bricolage-grotesque": ['"Bricolage Grotesque"', "sans-serif"],
        'raleway': ['"Raleway"', "sans-serif"],
      }
    },
  },
  plugins: [],
}

--->> index.html <<-------------------------------------------------

<head>
	...

  <link
    href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
    rel="stylesheet"
  />
</head>

--->> App.jsx <<----------------------------------------------------

<h1
  className="
    ...

    font-title
  "
>
  ReactArt
</h1>

`,
  },
  mediaQueries: {
    title: "Media queries",
    description:
      "Adding className such as 'sm: ', 'md: ', 'lg: ', 'xl: ', '2xl: '.",
    code: `
<header className=" ... mb-8 md:mb-16">

...

<h1
  className="
    text-xl
    md:text-4xl 
    
    ...
  "
>
  ReactArt
</h1>
`,
  },
  hoverState: {
    title: "Hover state",
    description:
      "Adding className 'hover: '.",
    code: `
<button className=" ... bg-amber-400 hover:bg-amber-500" {...props}>
  {children}
</button>
`,
  },
  dynamicStyling: {
    title: "Dynamic styling",
    description:
      "Good use example is feeding classNames based on conditions.",
    code: `
export default function Input({ label, invalid, ...props }) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow";

  if (invalid) {
    labelClasses += " text-red-400";
    inputClasses += " text-red-500 bg-red-100 border-red-300";
  } else {
    labelClasses += " text-stone-300";
    inputClasses += " text-gray-700 bg-stone-300";
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
`,
  },
}