export const USE_EFFECT = {
  useEffectA: {
    title: "Call every render",
    description:
      "Called at the initial render + every render. (* useEffect execution timing is right after the component is rendered.)",
    code: `
useEffect(() => {
  console.log("useEffect is called");
});
`,
  },
  useEffectB: {
    title: "Call at initial render only",
    description:
      "Called at only the initial render. (* useEffect execution timing is right after the component is rendered.)",
    code: `
useEffect(() => {
  console.log("useEffect is called");
}, []);


/**
 * 
 *  the function inside return of useEffect hook gets executed
 *  when a component is disposed (removed),
 *  or only when right before the next time useEffect is called
 * 
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
    title: "Called at dependency changes",
    description:
      "Called at the initial render and everytime depenancies are changed. (* useEffect execution timing is right after the component is rendered.)",
    code: `

/**
 * 
 *  As for dependencies, 
 *  DO NOT PASS FUNCTIONS(S) WIHTOUT USECALLBACK HOOK!
 *  Normally function objects get newly re-created
 *  every component renders,
 *  which triggers infinite loop to crash the app,
 *  and useCallback hook prevent to re-creating functions.
 * 
 * / 

useEffect(() => {
  console.log("useEffect is called");
}, [a, b]);
`,
  },
  useEffectD: {
    title: "Store in localStorage",
    description:
      "Store data in localStorage with useEffect.",
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
};
