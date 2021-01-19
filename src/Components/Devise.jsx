import React from "react";
import { useState } from "react";
import { Consumer } from "../ContextAPI";

export default function Devise(props) {
  // Check condition of device and return tru or false depending on devices array in app.
  const hidden = (condition) => {
    // debugger;
    if (props.index >= 0) {
      return condition === false ? "Off" : "On";
    } else return null;
  };

  return (
    <div>
      <Consumer>
        {(val) => {
          // debugger;
          return (
            <button
              type="button"
              className="btn btn-danger"
              style={{ textTransform: "uppercase", margin: "10px 5px" }}
              onClick={() => {
                val.delDevice(props.index);
              }}
            >
              x
            </button>
          );
        }}
      </Consumer>
      <button className={"btn btn-info"}>{props.name}</button>
      <Consumer>
        {(val) => {
          // debugger;
          return (
            <button
              type="button"
              className={"btn btn-warning"}
              style={{ textTransform: "uppercase", margin: "10px 5px" }}
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
