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
};
