export const PROPS_USE_CASES = {
  forwardingExistingPropsId: {
    title: "Forwarding existing props 'id'",
    description:
      "If you create a wrapper component and want to use it with existing properties such as 'id', 'className' or 'onClick', you have to forward props by using …props to make them available.",
    code: `
--->> App.jsx <<---------------------------------------------------

return (
  <Section title="Examples" id="examples">
    
    ...
    
  </Section>
);

--->> Section.jsx <<-----------------------------------------------

export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
`,
  },
  forwardingExistingPropsOnClick: {
    title: "Forwarding existing props 'onClick'",
    description:
    "If you create a wrapper component and want to use it with existing properties such as 'id', 'className' or 'onClick', you have to forward props by using …props to make them available.",
    code: `
--->> App.jsx <<---------------------------------------------------

<TabButton
  isSelected={selectedTopic === "components"}
  onClick={() => selectHandler("components")}
>
  Components
</TabButton>

--->> TabButton.jsx <<-----------------------------------------------

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
} 
`,
  },
  creatingAdditionalSlot: {
    title: "Creating additional slot in addition to props.child",
    description:
      "Adding an additional slot to a wrapper component in addtion to 'props.child', you need to create custom props (in below example, it's 'buttons'). In this way, you can create as much slots as you want.",
      code: `
--->> App.jsx <<---------------------------------------------------

<Tabs
  buttons={
    <>
      <TabButton
        isSelected={selectedTopic === "components"}
        onClick={() => selectHandler("components")}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "jsx"}
        onClick={() => selectHandler("jsx")}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "props"}
        onClick={() => selectHandler("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "state"}
        onClick={() => selectHandler("state")}
      >
        State
      </TabButton>
    </>
  }
>
  {tabContent}
</Tabs>

--->> Tabs.jsx <<--------------------------------------------------

export default function Tabs({ children, buttons }) {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
`,
  },
  dynamicallyChangeHtmlElements: {
    title: "Dynamically change html elements",
    description:
      "Dynamically changable html elements to a wrapper component, you have to create custom props starting with a capital letter (in this case, it's 'ButtonsContainer) otherwise React treats it as a built-in html element and couse errors.",
      code: `
--->> App.jsx <<---------------------------------------------------

<Tabs 
  ButtonsContainer="menu"
  buttons={
    <>
      <TabButton
        isSelected={selectedTopic === "components"}
        onClick={() => selectHandler("components")}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "jsx"}
        onClick={() => selectHandler("jsx")}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "props"}
        onClick={() => selectHandler("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "state"}
        onClick={() => selectHandler("state")}
      >
        State
      </TabButton>
    </>
  }
>
  {tabContent}
</Tabs>

--->> Tabs.jsx <<--------------------------------------------------

export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
`,
  },
  dynamicallyChangeClassName: {
    title: "Dynamically change className for css styling",
    description:
      "In order to change className dynamically, create a className variable and add className in correspondance to props (Check out 'Button.jsx' file).",
      code: `
--->> App.jsx <<---------------------------------------------------

import Button from './Button';
import HomeIcon from './HomeIcon';
import PlusIcon from './PlusIcon';

function App() {
  return (
     <div id="app">
      <section>
        <h2>Filled Button (Default)</h2>
        <p>
          <Button>Default</Button>
        </p>
        <p>
          <Button mode="filled">Filled (Default)</Button>
        </p>
      </section>
      <section>
        <h2>Button with Outline</h2>
        <p>
          <Button mode="outline">Outline</Button>
        </p>
      </section>
      <section>
        <h2>Text-only Button</h2>
        <p>
          <Button mode="text">Text</Button>
        </p>
      </section>
      <section>
        <h2>Button with Icon</h2>
        <p>
          <Button Icon={HomeIcon}>Home</Button>
        </p>
        <p>
          <Button Icon={PlusIcon} mode="text">
            Add
          </Button>
        </p>
      </section>
      <section>
        <h2>Buttons Should Support Any Props</h2>
        <p>
          <Button mode="filled" disabled>
            Disabled
          </Button>
        </p>
        <p>
          <Button onClick={() => console.log('Clicked!')}>Click me</Button>
        </p>
      </section>
    </div>
  );
}

export default App;

--->> Button.jsx <<------------------------------------------------ 

export default function Button({children, mode="filled", Icon, ...props}) {
 
  let cssClasses = \`button \${mode}-button\`;
  
  if (Icon) {
      cssClasses += ' icon-button'
  }
  
  if (props.className) {
      cssClasses += ' ' + props.className;
  }
 
  
  return (
      <button className={cssClasses} {...props}>
      {Icon && (
          <span className="button-icon"><Icon/></span>
     )}
      <span>{children}</span>
      </button>
      );
 }

--->> index.css <<------------------------------------------------- 

.button {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
}

.icon-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.button-icon {
  width: 1rem;
  height: 1rem;
}

.filled-button {
  background: linear-gradient(#7fa1f7, #6085e4);
  color: #030a1b;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.filled-button:hover {
  background: linear-gradient(#89a9fb, #6890f6);
}

.filled-button:disabled {
  background: #a3a9b7;
  color: #3a445c;
  box-shadow: none;
  cursor: not-allowed;
}

.outline-button {
  border: 1px solid #2658d6;
  color: #2658d6;
}

.outline-button:hover {
  background: #cbd8fc;
}

.text-button {
  color: #2658d6;
}

.text-button:hover {
  background: #cbd8fc;
}

`,
  },
  getherExtraProps: {
    title: "Gather extra props",
    description:
      "If you want to pass many props to children components, sometime it's cumbersome to write all props. Instead you can use '…props' to gather and distribute props properly.",
      code: `
/**
 * WRITE ALL PROPS
 */
export default function Input({ id }) {
  return (
    <div .... >
      <label ...> .... </label>
      <input 
        id={id}
        type="email"
        name="email"
        onBlur={() => handleInputBlur("email")}
        onChange={(event) => handleInputChange("email", event.target.value)}
        value={enteredValues.email} 
        />
      
      ...
      
    </div>
  );
}

/**
 * WRITE IN DISTRUCTURING WAY
 */
export default function Input({ id, ...props }) {
  return (
    <div .... >
      <label ...> .... </label>
      <input id={id} {...props} />
      
      ...
      
    </div>
  );
}
      
`,
  },
}
