import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../ContextAPI";
import { useState } from "react";
import Devise from "./Devise";

export default function Room(props) {
  const [deviseList, setDeviseList] = useState([]);
  const [selectedDevise, setSelectedDevise] = useState("");

  return (
    <div style={{ backgroundColor: props.color }}>
      <h1>{props.type}</h1>
      <h2>{props.name}</h2>
      {deviseList.map((element, i) => {
        return (
          <Devise name={element.deviseName} condition={element.condition} />
        );
      })}
      <label className="form-label" htmlFor="roomSelect">
        Select devise:
      </label>
      <br />
      <select
        onChange={(element) => {
          setSelectedDevise(element.target.value);
        }}
        className="form-select-sm"
        id="roomSelect"
      >
        <option>Choose devise</option>
        <option>Conditioner</option>
        <option>Lamp</option>
        <option>Boiler</option>
      </select>
      <br />
      <Link to="/">
        <button
          type="button"
          className="btn btn-primary"
          style={{ textTransform: "uppercase", margin: "10px 5px" }}
        >
          Back
        </button>
      </Link>
      <button
        type="button"
        className="btn btn-success"
        style={{ textTransform: "uppercase", margin: "10px 5px" }}
        onClick={() => {
          if (selectedDevise.length === 0) {
            alert("Please choose devise.");
          } else {
            setDeviseList([
              { deviseName: selectedDevise, condition: false },
              ...deviseList,
            ]);
          }
        }}
      >
        add devise
      </button>
      <Link to="/">
        <Consumer>
          {(val) => {
            return (
              <button
                type="button"
                className="btn btn-danger"
                style={{ textTransform: "uppercase", margin: "10px 5px" }}
                onClick={() => {
                  val.dell(props.id);
                }}
              >
                delete room
              </button>
            );
          }}
        </Consumer>
      </Link>
    </div>
  );
}
