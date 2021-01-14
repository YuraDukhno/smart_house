import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Bathroom from "./Components/Bathroom";
import Room from "./Components/Room";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddRoom from "./Components/AddRoom";
import { Provider } from "./ContextAPI";

function App() {
  const [rooms, setRooms] = useState([]);

  // Add a room to roomList.
  const addRoom = (roomName, roomType, roomColor) => {
    // debugger;
    setRooms([{ name: roomName, type: roomType, color: roomColor }, ...rooms]);
  };
  // Delete room from roomList.
  const deleteRoom = () => {
    return true;
  };

  const routeList = () => {
    if (rooms.length === 0) return null;
    else
      return (
        <div>
          {rooms.map((element, i) => {
            return (
              <Route
                exact
                path={`/${element.type}`}
                component={() => {
                  return (
                    <Room
                      id={i}
                      name={element.name}
                      type={element.type}
                      color={element.color}
                    />
                  );
                }}
              />
            );
          })}
        </div>
      );
  };

  return (
    <div
      className="App container-sm"
      style={{
        backgroundColor: "#f4f4f2",
        textAlign: "center",
        minHeight: "812px",
        padding: "10px",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "500px",
          margin: "100px 0px",
        }}
      >
        <Provider value={{ add: addRoom, rooms: rooms }}>
          <Router>
            <Switch>{routeList()}</Switch>
            <Switch>
              <Route
                exact
                path="/"
                component={() => {
                  return <Main rooms={rooms} />;
                }}
              />
              <Route
                exact
                path="/AddRoom"
                component={() => {
                  return <AddRoom />;
                }}
              />
            </Switch>
          </Router>
        </Provider>
        {/* 


      Here is going to be all created rooms.


      */}
      </div>
    </div>
  );
}

export default App;
