import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Room from "./Components/Room";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddRoom from "./Components/AddRoom";
import { Provider } from "./ContextAPI";

function App() {
  const [rooms, setRooms] = useState([]);

  // Add a room to roomList.
  const addRoom = (roomName, roomType, roomColor, devicesList) => {
    // debugger;
    setRooms([
      {
        name: roomName,
        type: roomType,
        color: roomColor,
        devices: devicesList,
      },
      ...rooms,
    ]);
  };

  // Delete room from roomList.
  const deleteRoom = (i) => {
    let tempRoomsList = rooms.filter((element, index) => index !== i);
    setRooms(tempRoomsList);
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
                path={`/${element.name}`}
                component={() => {
                  return (
                    <Room
                      id={i}
                      name={element.name}
                      type={element.type}
                      color={element.color}
                      devicesList={element.devices}
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

      <Provider value={{ add: addRoom, dell: deleteRoom, rooms: rooms }}>
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
    </div>
  );
}

export default App;
