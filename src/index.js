import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "tachyons"; // npm install tachyons

// index.js holds the parent component
// we load the data onto the parent
// in the child, we retrieve the props
// we can fill in our html with {props.name}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
