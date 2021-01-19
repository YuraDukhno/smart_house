import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../ContextAPI";
import { useState } from "react";
import Devise from "./Devise";

export default function Room(props) {
  // const [deviseList, setDeviseList] = useState([]);
  const [selectedDevise, setSelectedDevise] = useState("");

  return (
    <div>
      <div style={{ backgroundColor: props.color }}>
        <h1>{props.type}</h1>
        <h2>{props.name}</h2>

        {props.devices.map((element, i) => {
          if (element.room === props.name) {
            return (
              <Devise
                room={props.name}
                name={element.deviceName}
                condition={element.condition}
                index={i}
              />
            );
          } else return null;
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
          <option id="1">Choose devise</option>
          <option id="2">Conditioner</option>
          <option id="3">Lamp</option>
          <option id="4">Boiler</option>
          <option id="5">Stereo system</option>
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
              props.addDeviceFunction(props.name, selectedDevise, false);
            }
          }}
        >
          add devise
        </button>

        {/* <button
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
      </button> */}
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
    </div>
  );
}
