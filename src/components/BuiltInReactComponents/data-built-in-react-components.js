export const BUILT_IN_REACT_COMPONENTS = {
  suspense: {
    title: "Suspense",
    description:
      "<Suspense> lets you display a fallback until its children have finished loading.",
    code: `
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
`,
  },
  strictMode: {
    title: "StrictMode",
    description:
      "<StrictMode> lets you find common bugs in your components early during development.",
    code: `
<StrictMode>
  <App />
</StrictMode>
`,
  },
}