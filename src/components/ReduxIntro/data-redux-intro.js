export const REDUX_INTRO = {
  whatAndWhy: {
    title: "What’s Redux and why use it",
    description:
      "“Redux” is a state management system for cross-component or app-wide state. React Context could also play the same role, but there are several disadvantages such as potential deeply nested providers and bad performance.",
    code: `
return (
    <AuthContextProvider>
        <ThemeContextProvider>
            <UIInteractionContextProvider>
                <MultiStepFormContextProvider>
                    <UserRegistration />
                </MultiStepFormContextProvider>
            </UIInteractionContextProvider>
        </ThemeContextProvider>
    </AuthContextProvider>
);
  `,
  },
  howReduxWorks: {
    title: "How Redux works",
    description:
      "Managing ONLY ONE central data (state) store and components subscribe it. Components are NOT DIRECTLY related to state changes, instead “Reducer Function” is in charge of mutating data in the store. Reducer Function runs TWICE; first at the initialization, then by dispatched “Action”. The point is that Reducer Function ALWAYS inputs “old state + dispatch action” and outputs “new state object”. ",
    code: `
/**
 * IMPORT REDUX
 */
const redux = require("redux");

/**
 * REDUCER FUNCTION
 */
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
    return {
        counter: state.counter + 1,
    };
    }

    if (action.type === "decrement") {
    return {
        counter: state.counter - 1,
    };
    }

    return state;
};

/**
 * STORE
 */
const store = redux.createStore(counterReducer);

/**
 * SUBSCRIPTION
 */
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

/**
 * DISPATCH AN ACTION
 */
store.dispatch({ type: "increment" }); // Output ---> { counter: 1 }

store.dispatch({ type: "decrement" }); // Output ---> { counter: 0 }
  `,
  },
};
