export const USE_MEMO = {
  whatIsIt: {
    title: "What is it?",
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
};
