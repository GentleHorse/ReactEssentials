export const REACT_ROUTER_01 = {
  multiplePagesInSPAs: {
    title: "Multiple pages in SPAs",
    description:
      "In Single Page Applications (SPAs) there is only ONE initial HTML request & response, however page (url) cahnges are handled by client-side React code, not by server-side, so visible content is changed without fetching a new HTML file. ",
    code: ``,
  },
  gettingStarted: {
    title: "Getting started",
    description:
      "You need to install the package to use React router.",
    code: `
npm install react-router-dom
`,
  },
  definingRoutes: {
    title: "Defining routes",
    description:
      "In the root file, use “createBrowserRouter” method and provid it to the “router” attribute of “RouterProvider”.",
    code: `
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
`,
  },
  olderWayOfDefiningRoutes: {
    title: "Older way of defining routes",
    description:
      "In React Router v6.4 or older versions, routes are defined in nested JSX codes with “createRoutesFromElements” method and “Route” components. ",
    code: `
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const routesDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
);

const router = createBrowserRouter(routesDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
`,
  },
};
