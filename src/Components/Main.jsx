import React from "react";
import { Link } from "react-router-dom";

export default function Main(props) {
  return (
    <div
      style={{
        minHeight: "745px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "green",
      }}
    >
      <div
        style={{
          minHeight: "250px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: "red",
        }}
      >
        {/* Open link for each room in the rooms array. */}
        {props.rooms.map((element, i) => {
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
