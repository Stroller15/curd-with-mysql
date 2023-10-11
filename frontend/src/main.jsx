import * as React from "react";
import { createRoot } from "react-dom/client";
import Books from "./components/Books/Books";
import Add from "./components/Add/Add";
import Update from "./components/Update/Update";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books/>,
  },
  {
    path: "/add",
    element: <Add/>,
  },
  {
    path: "/update",
    element: <Update/>,
  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
