import React from "react";

// an object can have css styles
const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "2px solid black",
        height: "70vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
