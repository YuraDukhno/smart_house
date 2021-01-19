import React from "react";
import { useState } from "react";
import { Consumer } from "../ContextAPI";

export default function Devise(props) {
  const [condition, setCondition] = useState(false);

  const hidden = (condition) => {
    return condition === false ? "Off" : "On";
  };

  return (
    <div>
      <button
        className={"btn btn-info"}
        onClick={() => {
          setCondition(!condition);
        }}
      >
        {props.name}
      </button>
      <Consumer>
        {(val) => {
          return (
            <button
              onClick={() => {
                val.setCondition(props.index, props.name);
              }}
            >
              {hidden(val.condition)}
            </button>
          );
        }}
      </Consumer>
    </div>
  );
}
