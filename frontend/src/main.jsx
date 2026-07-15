import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/global.css";

/**
 * The main entry point for the React application.
 * Bootstraps the app, sets up routing, and renders it to the DOM.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
