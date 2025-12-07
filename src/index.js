import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AllData } from "./data/AllData";
import ScrollToTop from "react-scroll-to-top";
import AllCalender from "./calender/AllCalender";
import AllTimer from "./timer/AllTimer";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/calender",
    element: <AllCalender />,
  },
  {
    path: "/timer",
    element: <AllTimer/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AllData>
    <RouterProvider router={router} />
    <ScrollToTop smooth />
  </AllData>
);
