export const REDUX_ADVANCED = {
  asyncCodeWithUseEffect: {
    title: "Async code with useEffect",
    description:
      "You MUST NOT include side-effects and async tasks (ex. http requests) inside reducer functions. One of the TWO places to execute them is inside the components with “useEffect” hook. In the below example, everytime the redux state slice (cart) is updated, the cart data is sent to the backend via http request (The order is FIRST updating the redux state slice (cart) and THEN sending http request to store the data (cart) in the backend server).",
    code: `
// App.js ------------------------------------------------------------------------

let isInitial = true;

function App() {
  
  ....
  
  const cart = useSelector((state) => state.cart);
  
  ....

  useEffect(() => {
  
  /**
   * DEFINE THE FUNCTION
   */
  const sendCartData = async () => {
    const response = await fetch(
      "https://--<<some firebase database url>>---- /cart.json",
      { method: "PUT", body: JSON.stringify(cart) }
    );
  }
    
  /**
   * PREVENT EXECUTE AT THE INITIAL RENDER
   */  
  if (isInitial){
    isInitial = false;
    return;
    }
    
  /**
   * EXECUTE THE FUNCTION
   */  
  sendCartData(); 
    
  }, [cart]);

  ....
  
}

export default App;


// store > index.js ---------------------------------------------------------------

import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;

  `,
  },
  asyncCodeWithActionCreatorThunk: {
    title: "Aync code with action creator thunk",
    description:
      "Another place to execute async tasks is inside an action creator thunk.  An action creator function does NOT return the action itself, instead returns ANOTHER FUNCTION which EVENTUALLY returns the action (= it delays the action until later). In the below example, defin e “action creator thunk” inside cart-slice.js file and export to the App component where that action gets dispatched.",
    code: `
// store > cart-slice.js -------------------------------------------------------

export const sendCartData = (cart) => {
  return async (dispatch) => {
    // UI - sending the cart data
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending ....",
        message: "Sending cart data!",
      })
    );

    /**
     * DEFINE HTTP REQUEST (PUT)
     */
    const sendRequest = async () => {
      const response = await fetch(
        "https://--<<some firebase database url>>---- /cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      // Failed
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    /**
     * SEND HTTP REQUEST (PUT)
     */
    try {
      // Execute sending the request
      await sendRequest();

      // UI - succeeded in sending
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      // UI - failed in sending
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};


// App.js ------------------------------------------------------------------------

....

import { sendCartData } from "./store/cart-slice.js";

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  ....
  
  const cart = useSelector((state) => state.cart);
  
  ....

  useEffect(() => {
  
    // Prevent the code from being executed at the initial render
    if (isInitial) {
      isInitial = false;
      return;
    }

    // Dispatch the http request action
    dispatch(sendCartData(cart));
    
  }, [cart, dispatch]);

  
  ....
  
}

export default App;
  `,
  },
  fetchingData: {
    title: "Fetching data",
    description:
      "In the below example, the action creator first fetches the cart data and then updates the slice state of cart in redux.  The action creator is called in App.js component at the initial render.",
    code: `
// store > cart-slice.js -------------------------------------------------------

export const fetchCartData = () => {

  return async (dispatch) => {
    /**
     * DEFINE HTTP REQUEST (GET)
     */
    const fetchData = async () => {
      const response = await fetch("https://--<<some firebase database url>>---- /cart.json");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    /**
     * SEND HTTP REQUEST (GET)
     */
    try {
    
      // Fetch the cart data and set to the cart
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
      
    } catch (error) {
    
      // UI - failed in sending
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
      
    }
  };
};

// store > cart-actions.js -----------------------------------------------------

const cartSlice = createSlice({
  
  ....
  
  reducers: {
    
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },

    ....
  },
});

// App.js ----------------------------------------------------------------------

useEffect(() => {
  dispatch(fetchCartData());
}, [dispatch]);

  `,
  },
};
