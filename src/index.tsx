import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import App from "./components/App";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/Register/Register";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
