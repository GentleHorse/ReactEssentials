export const USE_EFFECT = {
  useEffectA: {
    title: "Call every render",
    description:
      "Called at the initial render + every render",
    code: `
useEffect(() => {
  console.log("useEffect is called");
});
`,
  },
  useEffectB: {
    title: "Call at initial render only",
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
    title: "Called at dependency changes",
    description:
      "Called at the initial render and everytime depenancies are changed",
    code: `
useEffect(() => {
  console.log("useEffect is called");
}, [a, b]);
`,
  },
  useEffectD: {
    title: "Store in localStorage",
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
};
