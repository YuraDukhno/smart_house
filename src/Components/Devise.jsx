import React from "react";
import { useState } from "react";
import { Consumer } from "../ContextAPI";

export default function Devise(props) {
  // Check condition of device and return tru or false depending on devices array in app.
  const hidden = (condition) => {
    // debugger;
    if (props.index >= 0) return condition === false ? "Off" : "On";
    else return null;
  };

  return (
    <div>
      <button className={"btn btn-info"}>{props.name}</button>
      <Consumer>
        {(val) => {
          // debugger;
          return (
            <button
              onClick={() => {
                val.setCondition(props.index);
              }}
            >
              {hidden(val.devices[props.index].condition)}
            </button>
          );
        }}
      </Consumer>
    </div>
  );
}
