export const USE_REDUCER = {
  whatIsIt: {
    title: "What is it?",
    description:
      "useReducer is a React Hook that lets you add a reducer to your component. useReducer is normally used as a replacement of useState for better organized code structure. It requires reducer function and initial value of state.",
    code: `
import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'INCREMENT'){
    return { count: state.count + 1 }
  }

  ...

  return state;
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  const incrementHandler = () => {
        dispatch({ type: 'INCREMENT' });
    }

  ...
`,
  },
  useWithContextAPI: {
    title: "Use with context API",
    description:
      "Sometimes useReducer is used combined with context API because the file where context value and context provider are stored often gets bigger and hard to read. useReducer makes the code more readable and reusable by outsourcing handler functions outside provider function.",
    code: `
import { createContext, useReducer } from "react";

/**
* 1) Context 
*/
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

/**
* 2) Reducer 
*/
function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    
    ...

    return {
      ...state, 
      items: updatedItems,
    };
  }

  if (action.type === "UPDATE_ITEM") {
        
    ...

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
}

/**
* 3) Context Provider 
*/
export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  const itemAddHandler = (id) => {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  };

  const updateCartItemQuantityHandler = (productId, amount) => {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId: productId,
        amount: amount,
      },
    });
  };

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: itemAddHandler,
    updateItemQuantity: updateCartItemQuantityHandler,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
`,
  },
};
