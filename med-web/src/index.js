

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
      <App />
      
    </SoftUIControllerProvider>
  </BrowserRouter>
  
);
