// @flow
import React from "react";
import { useEffect, useState } from "react";
import ParkingSpaceItem from "./ParkingSpaceItem";
import type { Element } from "react";
import { getParkingSpaces } from "../../api/parking_space";
import { makeEchoInstance } from "../../api/constants";

function ParkingSpaceContainer(): Element<"div"> {
  const [parkingSpaces, setParkingSpaces] = useState([]);

  useEffect(() => {
    getParkingSpaces()
      .then((r) => setParkingSpaces(r.data))
      .catch((e) => console.log(e));
    let echo = makeEchoInstance();
    echo.channel("parking-spaces").listen(".parking-spaces-updated", (e) => {
      setParkingSpaces(e.parking_spaces);
    });
  }, []);

  return (
    <div className="row">
      {parkingSpaces.map((obj) => (
        <ParkingSpaceItem parkingData={obj} key={obj.id} />
      ))}
    </div>
  );
}

export default ParkingSpaceContainer;
