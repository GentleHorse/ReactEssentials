export const REACT_HOOKS = {
  useState: {
    title: "useState",
    description:
      "Calling the set function does not change the current state in the already executing code. It only affects what useState will return starting from the next render. This means new state WILL NOT IMMEDIATELY be reflected.",
    code: `
const [name, setName] = useState('Taylor');

function handleClick() {
  setName('Robin');
  console.log(name); // Still "Taylor"!
}
`,
  },
  useEffectA: {
    title: "useEffect: case A",
    description:
      "Called at the initial render + every render",
    code: `
useEffect(() => {
  console.log("useEffect is called");
});
`,
  },
  useEffectB: {
    title: "useEffect: case B",
    description:
      "Called at only the initial render",
    code: `
useEffect(() => {
  console.log("useEffect is called");
}, []);


/**
 *  If you want to call a certain function 
 *  only when a component is disposed (removed), 
 *  use return function inside useEffect hook 
 * / 
 
useEffect(() => {
  console.log("useEffect is called");

  return () => {
      console.log("component disposed")
  }
}, []);
`,
  },
  useEffectC: {
    title: "useEffect: case C",
    description:
      "Called at the initial render and everytime depenancies are changed",
    code: `
useEffect(() => {
  console.log("useEffect is called");
}, [a, b]);
`,
  },
  useEffectD: {
    title: "useEffect: case D",
    description:
      "Store data in localStorage with useEffect",
    code: `
useEffect(() => {
  localStorage.setItem("count", count);
}, [count]);


/**
 *  Practical usage is below
 * / 

import { useEffect, useState } from "react";

function Clicker() {
  const [count, setCount] = useState(0);

  // called only at the initial render
  // set 'count' value if it exits
  useEffect(() => {
    // in case there's no data in localStorage,
    // use nullish coalescing operator('??')
    const savedCount = parseInt(localStorage.getItem("count") ?? 0);
    setCount(savedCount);
  }, []);

  // called at the initial render and the 'count' changed
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const buttonClick = () => {
    // use the below arrow function to fetch the latest value
    setCount((value) => value + 1);
  };

  return (
    <div>
      <div>Click count: {count}</div>
      <button onClick={buttonClick}>Click me</button>
    </div>
  );
}

export default Clicker;
`,
  },
  useMemo: {
    title: "useMemo",
    description:
      "useMemo needs a function as the first parameter and an array of dependencies as the second parameter (a bit like useEffect). In the function we need to return the desired value (in below case the colors array). If useMemo is being called again (when the App is being re-rendered), but the values in the dependencies array haven't changed, useMemo will return the previous array. And if one of the dependency values has changed, then useMemo will call the function again. In a way, useMemo works like a cache, and only a dependency value change can break it.",
    code: `
const colors = useMemo(() => {
  const colors = [];
  for (let i = 0; i < clickersCount; i++) {
    colors.push(\`hsl(\${Math.random() * 360}deg, 100%, 70%)\`);
  }

  return colors;

}, [clickersCount]);
`,
  },
  useRef: {
    title: "useRef",
    description:
      "It lets you reference a value that's not needed for rendering. You can access DOM element ONLY AFTER JSX is rendered, that's why playing inside useEffect (the initial render).",
    code: `
const buttonRef = useRef();

useEffect(() => {
  buttonRef.current.style.backgroundColor = 'papayawhip';
  buttonRef.current.style.color = 'salmon';

  return () => {
    localStorage.removeItem(keyName);
  };
}, []);

...

return (
  ...
    <button ref={buttonRef} onClick={buttonClick}>
      Click me
    </button>
  ...
);
`,
  },
};
