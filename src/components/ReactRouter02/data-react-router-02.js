export const REACT_ROUTER_02 = {
  navigatingPages: {
    title: "Navigating between pages with Links",
    description:
      "With using “Link” component, you can jump to other pages WITHTOUT sending http request to the server (prevent from reloading the whole application again). Note that “Link” only works INSIDE RouterProvider component.",
    code: `
import { Link } from "react-router-dom";

function HomePage() {
return (
  <>
    <h1>My Home Page</h1>
    <p>
      Go to <Link to="/products">the list of products</Link>.
    </p>
  </>
);
}

export default HomePage;
    
`,
  },
  layoutsAndNestedRoutes: {
    title: "Layouts and nested routes",
    description:
      "To wrap multiple pages, to apply general styling or to implement navigation elements with page links, it’s a pretty standard approach to create “general layout” component and then wrap routes with the “children” attribute. “Outlet” component is the marker of where children components get rendered.",
    code: `
// App.js ---------------------------------------------------------------

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);

// Root.js --------------------------------------------------------------

import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet /> 
    </>
  );
}

export default RootLayout;

// MainNavigation.js ----------------------------------------------------

import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

`,
  },
  errorPage: {
    title: "Showing error page",
    description:
      "In case the user accidentally entered a wrong url, prepare the error page with “errorElement”. ",
    code: `
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);
`,
  },
  navigationLinks: {
    title: "Navigation links",
    description:
      "In “NavLink” component, className can receive a function which can conditionally set the className based on “isActive” prop. As default, className is applied to child elements, so the “end” attribute needs to be set. ",
    code: `
// MainNavigation.js ----------------------------------------------------

<header className={classes.header}>
  <nav>
    <ul className={classes.list}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? classes.active : undefined
          }
          end
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? classes.active : undefined
          }
        >
          Products
        </NavLink>
      </li>
    </ul>
  </nav>
</header>

// MainNavigation.module.css --------------------------------------------

.list a:hover,
.list a.active {
  color: var(--color-primary-900);  /* css variable */
  text-decoration: underline;
  font-weight: bold;
}
`,
  },
};
