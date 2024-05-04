export const REDUX_WITH_REACT_01 = {
  gettingStarted: {
    title: "Getting started",
    description:
      "In order to use Redux with React, you should install “redux” & “react-redux”.",
    code: `
npm install redux
npm install react-redux
  `,
  },
  createTheStore: {
    title: "Create the store",
    description:
      "You need to create only ONE store for using Redux.",
    code: `
import { createStore } from "redux";

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
const store = createStore(counterReducer);

/**
 * EXPOSE THE STORE FOR OUTSIDE COMPONENT
 */
export default store;
  `,
  },
  providingTheStore: {
    title: "Providing the store",
    description:
      "In order to use the store, you need to provided it at the highest level.",
    code: `
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
  `,
  },
};
