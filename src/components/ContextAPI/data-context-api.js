export const CONTEXT_API = {
  createContext: {
    title: "How to use",
    description:
      "Call createContext outside of any components to create a context, wrap your components into a context provider to specify the value of this context for all components inside and then call useContext at the top level of your component to read and subscribe to context.",
    code: `
1) shopping-cart-context.jsx --------------------------------------

import { createContext } from "react";

export const CartContext = createContext({
    items: []
});

2) App.jsx --------------------------------------------------------

import { CartContext } from "./store/shopping-cart-context.jsx";

function App() {
  
  ...

  return (
    <CartContext.Provider value={{ items: [] }}>
      
      ...	

    </CartContext.Provider>
  );
}

3) Cart.jsx -------------------------------------------------------

import { useContext } from "react";
import { CartContext } from "../../../store/shopping-cart-context";

...
  
const cartCtx = useContext(CartContext);

`,
  },
  someContextConsumer: {
    title: "SomeContext.Consumer (Legacy)",
    description:
      "Before useContext existed, there was an older way to read context (in this example, you can access the value through variable, cartCtx). Although this older way still works, but newly written code should read context with useContext() instead.",
    code: `
import { CartContext } from "./store/shopping-cart-context.jsx";

return (
  <CartContext.Consumer>
    {(cartCtx) => {
        return (
          <div id="cart">

            ...

          </div>
      );
    }
  </CartContext.Consumer>
);
}
`,
  },
  linkState: {
    title: "Link state",
    description:
      "In order to link context to state, you need to provide value of context provider with state. (It is better to State be the same format as value of default context for auto completion. In this case, {  items: [ ] } ).",
    code: `
import { CartContext } from "./store/shopping-cart-context.jsx";

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  ...

  return (
    <CartContext.Provider value={shoppingCart}>
      
      ...	

    </CartContext.Provider>
  );
}
`,
  },
  linkStateSndHandlers: {
    title: "Link state and handlers",
    description:
      "You can not only link state value but also its handler functions. In that case, you should update default context value for auto completion.",
    code: `
import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {}
});

-------------------------------

import { CartContext } from "./store/shopping-cart-context.jsx";

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  const itemAddHandler = (id) => {
    setShoppingCart( ... );
  };

  const updateCartItemQuantityHandler = (productId, amount) => {
    setShoppingCart( ... );
  };

...

  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: itemAddHandler,
    updateItemQuantity: updateCartItemQuantityHandler
  };

  return (
    <CartContext.Provider value={ctxValue}>

    ...

    </CartContext.Provider>
`,
  },
  outsourcingContext: {
    title: "Outsourcing context",
    description:
      "You can outsource all context related values and functions by creating a custom context provider wrapper inside the file where context is created and stored.",
    code: `
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  const itemAddHandler = (id) => {
    setShoppingCart( ... );
  };

  const updateCartItemQuantityHandler = (productId, amount) => {
    setShoppingCart( ... );
  };

  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: itemAddHandler,
    updateItemQuantity: updateCartItemQuantityHandler,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

------------------------------

function App() {
  return (
    <CartContextProvider>
        
      ...			

    </CartContextProvider>
  );
}

export default App;
`,
  },
};
