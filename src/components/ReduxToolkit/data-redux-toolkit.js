export const REDUX_TOOLKIT = {
  gettingStarted: {
    title: "Getting started",
    description:
      "You need to install extra package for using Redux Toolkit.",
    code: `
npm install @reduxjs/toolkit
  `,
  },
  addingStateSlices: {
    title: "Adding state slices",
    description:
      "Import “createSlice” which expects an object as an argument. So you need to prepare the slice of the global state. You can create mutiple state slices for maintaining an app. One of the great points of Redux Toolkit is that you can handle state properties in “seemingly” mutating way (like state.counter++) because behind the scene, it will automatically detect it and create the clone of state properties to not mutating the existing states.",
    code: `
const initialState = { counter: 0, showCounter: true };

...

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
  `,
  },
  connectingReduxToolkitState: {
    title: "Connecting Redux Toolkit State",
    description:
      "Pass the state slice reducer to the store. To do that, use “configureStore” instead of “createStore” because it automatically merges the multiple reducers.",
    code: `
const counterSlice = createSlice({

  ....
  
});

const store = configureStore({
  reducer: counterSlice.reducer,
});
  `,
  },
  actionObjects: {
    title: "Action objects",
    description:
      "You can access the slice state methods through the “actions” property and it automatically creates and returns the action object. To dispatch the action object methods (increment, decrement, etc), use “useDispatch()”. Not that if you want to payload some values, you need to set through “payload” attribute.",
    code: `
// store > index.js -----------------------------------------

....

const counterSlice = createSlice({
  
  ....
  
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },

});

....

export const counterActions = counterSlice.actions;



// the component ----------------------------------------------

....

const dispatch = useDispatch();

....

const incrementHandler = () => {
  dispatch(counterActions.increment());
};

const increaseHandler = () => {
  dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 5 }
};

const decrementHandler = () => {
  dispatch(counterActions.decrement());
};

const toggleCounterHandler = () => {
  dispatch(counterActions.toggleCounter());
};

....

  `,
  },
  workingWithMutipleSlices: {
    title: "Working with multiple slices",
    description:
      "Even if you work with mutiple slices, you must have the only ONE store and ONE reducer. Note that to access the state, you need to do it via identifiers of the store “reducer” attribute (in the below example, ”counter’ & “auth”).",
    code: `
// store > index.js -----------------------------------------

import { createSlice, configureStore } from "@reduxjs/toolkit";

/**
 * INITIAL STATE  - COUNTER, AUTHENTICATION
 */
const initialCounterState = { counter: 0, showCounter: true };

const initialAuthState = { isAuthenticated: false };

/**
 * STATE SLICES - COUNTER, AUTHENTICATION
 */
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    // They can be accessed via the "action" property
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

/**
 * STORE
 */
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

/**
 * EXPORT
 */
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

// the component - Counter.js -------------------------------

....

const counter = useSelector((state) => state.counter.counter);
const showCounter = useSelector((state) => state.counter.showCounter);

....

// the component - Header.js --------------------------------

....

const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

....

  `,
  },
};
