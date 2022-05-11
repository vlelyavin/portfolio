import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const application = ReactDOM.createRoot(document.getElementById("application"));
application.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
