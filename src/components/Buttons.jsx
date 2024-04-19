

import React from "react";

const Buttons = (props) => {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: props.color, color: "black" }}
      onClick={props.onClick}
    >
      {props.color.charAt(0).toUpperCase() + props.color.slice(1)} 
    </button>
  );
};

export default Buttons;
