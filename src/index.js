import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tachyons"; // npm install tachyons
import Card from "./Card";
import { robots } from "./robots";

// index.js holds the parent component
// we load the data onto the parent
// in the child, we retrieve the props
// we can fill in our html with {props.name}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      {/* first robot */}
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />

      {/* second robot */}
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />

      {/* third robot */}
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
    </div>
  </React.StrictMode>
);
