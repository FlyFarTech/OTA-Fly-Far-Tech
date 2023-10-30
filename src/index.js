import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Main from "./Components/Main/Main";
import Home from "./Components/Home/Home";
import OnewayAfterSearch from "./Components/OnewayAfterSearch/OnewayAfterSearch";
import RoundwayAfterSearch from "./Components/RoundwayAfterSearch/RoundwayAfterSearch";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/onewayaftersearch",
        element: <OnewayAfterSearch />,
      },
      {
        path: "/roundwayaftersearch",
        element: <RoundwayAfterSearch />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
