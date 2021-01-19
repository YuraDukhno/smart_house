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
  const [devices, setDevices] = useState([]);

  // Add a object room to rooms.
  // Name of room, Type of room and room color.

  // const ifSameRoomName = (name) => {
  //   debugger;
  //   return
  // };

  const addRoom = (roomName, roomType, roomColor) => {
    // debugger;
    // let flag = ifSameRoomName(roomName);
    if (
      rooms.some((element) => {
        return element.name === roomName;
      })
    )
      alert("Try another name!");
    else {
      setRooms([
        {
          name: roomName,
          type: roomType,
          color: roomColor,
        },
        ...rooms,
      ]);
    }
  };

  // Add device to the devices array.
  // In witch room device is, device name, device condition and id.
  const addDevice = (room, device, condition) => {
    setDevices([
      { room: room, deviceName: device, condition: condition },
      ...devices,
    ]);
  };

  // Delete device from devices.
  const deleteDevice = (id) => {
    // debugger;
    let tempDevicesList = devices.filter((element, index) => index !== id);
    setDevices(tempDevicesList);
  };

  const setDeviceCondition = (id) => {
    let newDevices = [...devices];
    for (let i = 0; i < newDevices.length; i++) {
      if (i === id) newDevices[i].condition = !newDevices[i].condition;
    }
    setDevices(newDevices);
  };

  // Delete room from rooms.
  const deleteRoom = (i) => {
    let tempRoomsList = rooms.filter((element, index) => index !== i);
    setRooms(tempRoomsList);
  };

  // Open rout for each room in the array rooms.
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
                      addDeviceFunction={addDevice}
                      devices={devices}
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
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f4f4f2",
        textAlign: "center",
        minHeight: "812px",
        padding: "10px",
      }}
    >
      {/* Header Component */}
      <Header />

      <Provider
        value={{
          add: addRoom,
          dell: deleteRoom,
          setCondition: setDeviceCondition,
          rooms: rooms,
          devices: devices,
          delDevice: deleteDevice,
        }}
      >
        <Router>
          {/* Open here list of routs from rooms array. */}
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
