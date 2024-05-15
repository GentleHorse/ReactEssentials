export const REACT_ROUTER_07 = {
  behindTheSceneWork: {
    title: "Behind-the-scenes work with useFetcher()",
    description:
      "If an action function might possibly get triggered on multiple routes, it’s a perfect case to execute it behind the scene with “useFetcher” hook. “useFetcher” interacts with route loaders and actions without causing a navigation (= without transitions to any pages). Thus, it’s great for any interaction that stays on the same page.",
    code: `
import { useFetcher } from "react-router-dom";

....

  const fetcher = useFetcher();
  const { data, state } = fetcher;
  
  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert("Successfully signed up the newsletter!!");
    }
  }, [data, state]);
  
  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );

....
`,
  },
  differingDataFetching: {
    title: "Differring data fetching",
    description:
      "For better user experiences, something should be showed while loading contents with http requests. In such cases, use “defer()” method, “Await” element and “Suspense” element. Note that the loading function returns “defer()” method instead of Promise (”response”), “loadEvents” function shouldn’t return Promise, but must return a resolved Promise with “json()” method.",
    code: `
import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList.js";

/**
 * EVENTS PAGE
 */
function EventsPage() {
  const { events } = useLoaderData(); // fetch all data in Promise

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading ....</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

/**
 * LOAD EVENTS FUNCTION
 */
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

/**
 * LOADER FUNCTION
 */
export function loader() {
  return defer({
    events: loadEvents(),
  });
}    
`,
  },
  showDataWhileLoading: {
    title: "Show data while loading other data",
    description:
      "“defer()” helps to show data whilst other data is still loading. You can also add “await” to defer() inside the “loader” function to tell react-router-dom not to move to the page until data gets loaded. The order is 1) “loadEvent” function gets executed and returns data, 2) move to the event detail page, 3) “loadEvents” function gets executed and returns data.",
    code: `
import {
  json,
  useRouteLoaderData,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem.js";
import EventsList from "../components/EventsList.js";
import { Suspense } from "react";

/**
 * EVENT DETAIL PAGE
 */
function EventDetailPage() {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading ....</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading ....</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

/**
 * LOAD EVENT FUNCTION
 */
async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected events." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

/**
 * LOAD EVENTS FUNCTION
 */
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

/**
 * LOADER FUNCTION
 */
export async function loader({ request, params }) {
  const id = params.eventId; // access the dynamic segment

  return defer({
    event: await loadEvent(id), // await before moving to the page
    events: loadEvents(),
  });
}

/**
 * ACTION FUNCTION
 */
export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/events");
}    
`,
  },
};
