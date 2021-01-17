import React from "react";
import { useState } from "react";

export default function Devise(props) {
  const [condition, setCondition] = useState(false);

  const hidden = () => {
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
      {hidden()}
    </div>
  );
}
