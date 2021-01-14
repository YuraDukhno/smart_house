import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddRoom from "./AddRoom";
export default function Main(props) {
  const [flag, setFlag] = useState(true);

  const showLinks = () => {
    // debugger;
    if (props.rooms.length === 0) return null;
    else {
      // props.rooms.map((element, i) => {
      //   console.log(element.type);
      //   return (
      //     <Link to={`/${element.type}`}>
      //       <button>{element.type}</button>
      //     </Link>
      //   );
      // });
      for (let i = 0; i < props.rooms.length; i++) {
        return (
          <Link to={`/${props.rooms[i].type}`}>
            <button>{props.rooms[i].type}</button>
          </Link>
        );
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {/* {showLinks()} */}
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
