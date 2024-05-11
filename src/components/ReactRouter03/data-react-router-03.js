export const REACT_ROUTER_03 = {
  navigatingProgrammatically: {
    title: "Navigating programmatically",
    description:
      "In some situcations, you might want to trigger some navigation actions (switching pages) inside components like after sending the form or a certain time passes. This can be done with the “useNavigate” method.",
    code: `
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      
      ....
      
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}
`,
  },
  dynamicRoutes: {
    title: "Dynamic routes",
    description:
      "You can set routes dynamically by using “colon + any value” in a path (in the below example, it’s “:productId”), which is technically a placeholder. “useParams” returns params objects which contains every dynamic path segments, so you can load different page based on your custom values in the path.",
    code: `
// App.js ---------------------------------------------------------------

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      
      ....
      
      { path: "/products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

// Products.js ----------------------------------------------------------

import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

function ProductsPage() {
  return (
    <>
      <h1>The Product Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={\`/products/\${product.id}\`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;

// ProductDetail.js -----------------------------------------------------

import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      
      ....
      
      <p>{params.productId}</p>
    </>
  );
}
`,
  },
  relativeAbsolutePath: {
    title: "Relative path vs absolute path",
    description:
      "Defining paths in a relative way (WITHOUT slash symbol) means following paths are appended after the CURRENT ACTIVE path. In the below example, HomePage url is “/root/”, ProductPage url is “/root/products/”, and ProductDetailPage url is “/root/products/p1”, “/root/products/p2”, “/root/products/p3”. To move up one level with the “Link” component, set “to” attribute to “..” & “relative” attribute to “path” (as default, it’s “route”).",
    code: `
// App.js ---------------------------------------------------------------

const router = createBrowserRouter([
  {
    path: "/root",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

// Products.js ----- /root/products -------------------------------------

import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

function ProductsPage() {
  return (
    <>
      <h1>The Product Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;

// ProductDetail.js ----- /root/products/:productId ---------------------

<p>
  <Link to=".." relative="path">Back</Link>
</p>
`,
  },
  indexRoutes: {
    title: "Index routes",
    description:
      "Defining the default route, use the “index” attribute. ",
    code: `
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      
      ....
      
    ],
  },
]);   
`,
  },
};
