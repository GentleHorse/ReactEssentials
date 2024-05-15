export const REACT_ROUTER_04 = {
  dataFetchingWithLoader: {
    title: "Data fetching with a loader()",
    description:
      "By adding the “loader” function to the route, the “loader” function will be executed just before the route is about to be visited (meaning just before the page component which is provided to the “element” attribute gets rendered). Any data which is returned by the function is available in components. In order to access that returned data, use “useLoaderData”. “useLoaderData” returns the loader data for the nearest ancestor Route loader. The data can be accessed inside LOWER routes and components which are used inside these routes, NOT HIGHER level routes.",
    code: `
// App.js ---------------------------------------------------------------

....

{
  index: true,
  element: <EventsPage />,
  loader: async () => {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {

      // ..... error handling

    } else {
      const resData = await response.json();

      return resData.events;   // Returns promise
    }
  },
},

....

// Events.js ------------------------------------------------------------

import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList.js";

function EventsPage() {
  const events = useLoaderData();

  return <EventsList events={events} />;
}

export default EventsPage;
`,
  },
  storeLoaderCode: {
    title: "Store the loader() code inside the component",
    description:
      "It’s a common senario to store loader() code inside the component and exported it to the components where it’s set to the “loader” function of the route. ",
    code: `
// App.js ---------------------------------------------------------------

import EventsPage, { loader as eventsLoader } from "./pages/Events.js";

....

{
  index: true,
  element: <EventsPage />,
  loader: eventsLoader
},

....

// Events.js ------------------------------------------------------------

import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList.js";

/**
 * EVENTS PAGE
 */
function EventsPage() {
  const events = useLoaderData();

  return <EventsList events={events} />;
}

export default EventsPage;

/**
 * LOADER FUNCTION
 */
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
      // ..... error handling
    } else {
      const resData = await response.json();
  
      return resData.events;
    }
  }

}
`,
  },
  fetchingRouteAction: {
    title: "Fetching the route action state",
    description:
      "“useNavigation” returns a navigation object which has a property to access the route action state such as “idle”, “loading”, “submitting”. Note that the loading indicator will NOT BE ADDED ON THE PAGE A USER IS CURRENTLY TRANSITIONIONG TO.",
    code: `
import { useNavigation } from "react-router-dom";

function RootLayout() {

  const navigation = useNavigation();  // navitation object

  return (
    <>
      ....

      <main>
      
        {navigation.state === 'loading' && <p>Loading ..... </p>}

        ....
        
        
      </main>
    </>
  );
}

export default RootLayout;

`,
  },
  returningResponseObject: {
    title: "Returning Response object in loader()",
    description:
      "You can return anything inside the loader function so that “Response” objects can be returned (in the below code, “response” is the Response object). Behind the scene, the react router handles properly extracting data from a returned Promise and that’s why you don’t need to use the “json()” method of Response to extract data manually.",
    code: `
// App.js ---------------------------------------------------------------

import EventsPage, { loader as eventsLoader } from "./pages/Events.js";

....

{
  index: true,
  element: <EventsPage />,
  loader: eventsLoader
},

....

// Events.js ------------------------------------------------------------

import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList.js";

/**
 * EVENTS PAGE
 */
function EventsPage() {
  const data = useLoaderData(); // fetch all data in Promise
  const events = data.events; // extract the events data

  return <EventsList events={events} />;
}

export default EventsPage;

/**
 * LOADER FUNCTION
 */
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ..... error handling
  } else {
    return response; // returns Promise (Response object)
  }
}  
`,
  },
};
