export const USE_CALLBACK = {
  whatIsIt: {
    title: "What is it?",
    description:
      "useCallback is a React Hook that lets you cache a function definition between re-renders. Normally function objects get automatically newly re-created every component(s) render cycles, but useCallback prevents this automatic re-creation. Using useCallback hook is a good practice for preventing undesired infinite loops.",
    code: `
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
`,
  },
  useWithMemo: {
    title: "Use with memo()",
    description:
      "When you use memo() and pass functions as dependencies, you should wrap these functions with useCallback() to prevent creating function newly otherwise memo() cannot prevent re-renderinng components.  (= because new creation means passing new props to child components).",
    code: `
const incrementHandler = useCallback(function incrementHandler() {
  setCounter((prevCounter) => prevCounter + 1);
}, []);

return (

    ...

      <IconButton icon={PlusIcon} onClick={incrementHandler}>
        Increment
      </IconButton>


----------------------------------------------------------------------

import { memo } from "react";

const IconButton = memo(function IconButton({ children, icon, ...props }) {

  return (
    <button {...props} className="button">
      
      ...

    </button>
  );
});

export default IconButton;
`,
  },
};
