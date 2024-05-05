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
  useTheStore: {
    title: "Use the store (useSelector)",
    description:
      "“react-redux” automatically sets up the subscription for the component. This means whenever the component is re-rendered, it automatically fetch the latest state data.",
    code: `
import { useSelector } from 'react-redux';

....

const Counter = () => {

  const counter = useSelector(state => state.counter);

  return (
    
    ....
    
      <div className={classes.value}>{counter}</div>
      
    ....
    
  );
};
  `,
  },
  dispatchActions: {
    title: "Dispatch actions (useDispatch)",
    description:
      "To dispatch actions, you need to use “useDispatch” as a dispatch function.",
    code: `
import { useSelector, useDispatch } from "react-redux";

....

const Counter = () => {
  
  const dispatch = useDispatch();

  ....

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  ....

  return (
    
    ....
    
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Descrement</button>
      
      ....
      
  );
};
  `,
  },
  reduxWithClassBasedComponent: {
    title: "Redux with class-based component",
    description:
      "With class-based component, you cannot use hooks, so you need to use “connect” functions for export the component and pass two values: “mapStateToProps” & “mapDispatchToProps”.  To use three props (the counter state, increment dispatch function and decrement dispatch function), you need to add “this.props” in front of them, and for two dispatch functions, don’t forget to “bind” them.",
    code: `
import { Component } from "react";
import { connect } from "react-redux";

import classes from "./Counter.module.css";

class CounterClassBasedVer extends Component {

  /**
   * HANDLERS - INCREMENT, DECREMENT, TOGGLE
   */
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Descrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

/**
 * STATE MAP PROPS FUNTION 
 */
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

/**
 * DISPATCH MAP PROPS FUNCTION
 */
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterClassBasedVer);
  `,
  },
};
