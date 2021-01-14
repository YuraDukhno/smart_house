import React from "react";
import { Consumer } from "../ContextAPI";
import { useState } from "react";
import { Link } from "react-router-dom";
import Bathroom from "./Bathroom";

export default function AddRoom() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("white");

  return (
    <div>
      <div
        className=""
        style={{
          border: "solid 1px #14274e",
          borderRadius: "10px",
          boxShadow: "2px 2px 10px",
          backgroundColor: "#9ba4b4",
        }}
      >
        <label className="form-label" htmlFor="roomSelect">
          Select room to add:
        </label>
        <br />
        <select
          className="form-select-sm"
          onChange={(element) => {
            setType(element.target.value);
          }}
          id="roomSelect"
        >
          <option>Choose room</option>
          <option>Bathroom</option>
          <option>Bedroom</option>
          <option>Kitchen</option>
          <option>Toilet</option>
        </select>
        <br />
        <label htmlFor="nameInput">Write a name for room:</label>
        <br />
        <input
          className="form-control-sm"
          onChange={(element) => {
            setName(element.target.value);
          }}
          id="nameInput"
          type="text"
        />
        <br />
        <label htmlFor="colorInput">Choose color:</label>
        <br />
        <input
          className="form-control-sm form-control-color"
          onChange={(element) => {
            setColor(element.target.value);
          }}
          id="colorInput"
          type="color"
          name="colorInput"
        />
        <br />
        <Link to="/">
          <button
            type="button"
            className="btn btn-success"
            style={{ textTransform: "uppercase", margin: "10px 5px" }}
          >
            Back
          </button>
        </Link>
        <Consumer>
          {(val) => {
            return (
              <button
                type="button"
                className="btn btn-success"
                style={{ textTransform: "uppercase", margin: "10px 5px" }}
                onClick={() => {
                  val.add(name, type, color);
                }}
              >
                Add Room
              </button>
            );
          }}
        </Consumer>
      </div>
    </div>
  );
}
