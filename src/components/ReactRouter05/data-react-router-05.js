export const REACT_ROUTER_05 = {
  genericErrorHandling: {
    title: "Generic error handling",
    description:
      "By creating the generic error page and set to the “errorElement” attribute of the root route, you can handle errors in a generic way. “useRouteError()” returns the nearest ancestor Route error, which could be a loader/action error or a render error. This is intended to be called from your ErrorBoundary/errorElement to display a proper error message. “json()” creates a Response object including data in the JSON format.",
    code: `
// App.js ---------------------------------------------------------------

....

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    
    ....
    
  },
]);

....

// Error.js -------------------------------------------------------------

import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.js";
import PageContent from "../components/PageContent.js";

function ErrorPage() {
  // Fetch route error 
  const error = useRouteError();

  // Title & message
  let title = "An error occurred!";
  let message = "Something went wrong!";

  // Server error (throwed by the loader function in Events.js)
  if (error.status === 500) {
    message = error.data.message;
  }

  // Default error status set by react router
  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <MainNavigation />

      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;

// Events.js ------------------------------------------------------------

import { json } from "react-router-dom";

....

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response; // returns Promise (Response object)
  }
}

`,
  },
  fetchDataOfDynamicRoutes: {
    title: "Fetch data of dynamic routes",
    description:
      "To fetch data of dynamic routes with “loader” function, you need to access dynamic segments (starting with “:” symbol). The “loader” function can accept two elements: “request” & “params” and with “params”, you can access it.",
    code: `
// App.js ---------------------------------------------------------------

import EventDetailPage, { loader as eventDetailLoader } from "./pages/EventDetail.js";

....

  {
    path: ":eventId",
    element: <EventDetailPage />,
    loader: eventDetailLoader,
  },
  
....


// EventDetail.js -------------------------------------------------------

import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem.js";

/**
 * EVENT DETAIL PAGE
 */
function EventDetailPage() {
  const data = useLoaderData();
  const event = data.event;

  return <EventItem event={event} />;
}

export default EventDetailPage;

/**
 * LOADER FUNCTION
 */
export async function loader({ request, params }) {
  const id = params.eventId;    // access the dynamic segment

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected events." },
      { status: 500 }
    );
  } else {
    return response;
  }
}

`,
  },
  shareALoaderByMultipleRoutes: {
    title: "Share a loader by muliplte routes",
    description:
      "By setting loaders in root routes, loaders can be shared by multiple routes (in the below example, “eventDetailLoader”). However you cannot access that data with “useLoaderData” hook because the loader function is set at the higher route. In that case, you have to set the “id” attribute of the root route and use “useRouteLoaderData” to fetch data.",
    code: `
// App.js ---------------------------------------------------------------

....

  {
    path: ":eventId",
    id: "event-detail",
    loader: eventDetailLoader,
    children: [
      {
        index: true,
        element: <EventDetailPage />,
      },
      { path: "edit", element: <EditEventPage /> },
    ],
  },

.....

// EventDetail.js & EditEvent.js ----------------------------------------

....

  const data = useRouteLoaderData("event-detail");
  const event = data.event;

....
`,
  },
  dataSubmissionWithFormAndAction: {
    title: "Data submission with <Form> & action()",
    description:
      "On working with action() functions, you need to make sure that all inputs have “name” attributes and they are wrapped with the “Form” element which react-router-dom provides. In the “Form” element, you need to specify the method (in the below example, it’s “post”). “Form” element doesn’t send the data immediately to the backend, instead send it to the ACTION (meaning that it triggers the action function).",
    code: `
// App.js ---------------------------------------------------------------

import NewEventPage, { action as newEventAction } from "./pages/NewEvent.js";

....

  { path: "new", element: <NewEventPage />, action: newEventAction },

....

// NewEvent.js ----------------------------------------------------------

import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm.js";

/**
 * NEW EVENT PAGE
 */
function NewEventPage() {
  return <EventForm />;
}

export default NewEventPage;

/**
 * ACTION FUNCTION
 */
export async function action({ request, params }) {
  // 1. Receive entered data in the <Form>
  const data = await request.formData();

  // 2. Prepare sending data
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  // 3. Post data
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  // 4. Error handing
  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  // 5. Redirect to home 
  return redirect("/");
}

// EventForm.js ---------------------------------------------------------

import { Form } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {

  return (
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;
`,
  },
};
