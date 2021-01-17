import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Room from "./Room";
import AddRoom from "./AddRoom";
export default function Main(props) {
  return (
    <div
      style={{
        backgroundColor: "red",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          flexFlow: "wrap",
        }}
      >
        {props.rooms.map((element, i) => {
          console.log(element.type);
          return (
            <Link to={`/${element.name}`}>
              <button
                className="btn btn-success"
                style={{ textTransform: "uppercase", margin: "10px 5px" }}
              >
                {element.name}
              </button>
            </Link>
          );
        })}
      </div>
      <Link to="/AddRoom">
        <button
          type="button"
          className="btn btn-success"
          style={{ textTransform: "uppercase" }}
        >
          add room
        </button>
      </Link>
    </div>
  );
}
