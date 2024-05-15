export const REACT_ROUTER_06 = {
  submittingDataImperatively: {
    title: "Submitting data in a imperative way",
    description:
      "The “Form” element which react-router-dom provides automatically triggers the action function but there is another way of triggering the action. “useSubmit” lets programmers to do so manually thus it’s useful for example when it comes to implement a confirmation step just before submitting the data. In below example, the action function is defined in the “EventDetail.js” file and triggered by “startDeleteHandler”  in the “EventItem.js” file.  In the “EventItem.js” file,  “submit” function which is created by “useSubmit” method receives the “delete” method, and it’s passed to the action function in the “EventDetail.js” file with “request.method”.",
    code: `
// App.js ---------------------------------------------------------------

import EventDetailPage, { action as deleteEventAction } from "./pages/EventDetail.js";

....

  {
    index: true,
    element: <EventDetailPage />,
    action: deleteEventAction,
  },


// EventDetail.js -------------------------------------------------------

....

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/");
}

// EventItem.js ---------------------------------------------------------

import { useSubmit } from "react-router-dom";

import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });  // triggers the action
    }
  }

  return (

      ....

        <button onClick={startDeleteHandler}>Delete</button>
      
      ....
  );
}

export default EventItem;
`,
  },
  reflectSubmissionStatus: {
    title: "Reflect submission status to UI",
    description:
      "Show submission status in UI and disable buttons while submitting data with “useNavigation” hook.",
    code: `
import { Form, useNavigation } from "react-router-dom";

function EventForm({ method, event }) {

  // Check status - "submitting"
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="post".... >
      
      ....
      

        <button .... disabled={isSubmitting}>
          Cancel
        </button>
        
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting ...." : "Save"}
        </button>
        
        ....

    </Form>
  );
}
`,
  },
  outputValidationErrors: {
    title: "Output validation errors",
    description:
      "It’s often a good practice to show validation errors just after a user tries to submit data WITHOUT directing to the error page.  “useActionData” hook returns the action data for the nearest ancestor Route action. In the below example, input validation error is defined on backend under the status code 422.",
    code: `
// NewEvent.js ----------------------------------------------------------

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

  // 4. Custom error defined in events.js in the backend folder
  if (response.status === 422){
    return response;
  }

  // 5. Error handing
  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  // 6. Redirect to events 
  return redirect("/events");
}


// EventForm.js ---------------------------------------------------------

import { useActionData } from "react-router-dom";

function EventForm({ method, event }) {

  // Data from the route action (in NewEvents.js)
  const data = useActionData();

  ....

  return (
    <Form .... >
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}

      ....
      
    </Form>
  );
}

// event.js (dummy backend) ---------------------------------------------

....

router.post("/", async (req, res, next) => {
  const data = req.body;

  let errors = {};

  if (!isValidText(data.title)) {
    errors.title = "Invalid title.";
  }

  if (!isValidText(data.description)) {
    errors.description = "Invalid description.";
  }

  if (!isValidDate(data.date)) {
    errors.date = "Invalid date.";
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = "Invalid image.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "Adding the event failed due to validation errors.",
      errors,
    });
  }

  try {
    await add(data);
    res.status(201).json({ message: "Event saved.", event: data });
  } catch (error) {
    next(error);
  }
});
`,
  },
  reusingActions: {
    title: "Reusing actions",
    description:
      "If an app has functions of both submitting new data & modifying existing data, there is probably a chance to utilize a data submitting action and let it used both for “POST” & “PATCH” http requests. In the below example, the utilized action function is defined in the “EventForm.js” file and used for both “new” event route & “edit” event route.  Note that the action which is reused ans shared by multiple routes MUST BE DEFINED INSIDE the component which is used in these routes. In the below case, it’s the EventForm component.",
    code: `
// App.js ---------------------------------------------------------------

import { action as manipulateEventAction } from "./components/EventForm.js";

  ....
  
    {
      path: ":eventId",
      id: "event-detail",
      loader: eventDetailLoader,
      children: [
        
        ....
        
        {
          path: "edit",
          element: <EditEventPage />,
          action: manipulateEventAction,
        },
      ],
    },
    {
      path: "new",
      element: <NewEventPage />,
      action: manipulateEventAction,
    },
  
  ....
  
// EventForm.js ---------------------------------------------------------
  
export async function action({ request, params }) {
  // 1. Receive method & entered data in the <Form>
  const method = request.method;
  const data = await request.formData();

  // 2. Prepare sending data
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  // 3. Submit data - POST / PATCH
  let url = "http://localhost:8080/events/";

  if (method === "PATCH"){
    const eventId = params.eventId;
    url += eventId;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  // 4. Custom error defined in events.js in the backend folder
  if (response.status === 422) {
    return response;
  }

  // 5. Default error handing
  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  // 6. Redirect to events
  return redirect("/events");
}

// NewEvent.js ----------------------------------------------------------

import EventForm from "../components/EventForm.js";

function NewEventPage() {
  return <EventForm method="post" />;
}

export default NewEventPage;

// EditEvent.js ---------------------------------------------------------

import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm.js";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;

  return <EventForm method="patch" event={event} />;
}

export default EditEventPage;
`,
  },
};
