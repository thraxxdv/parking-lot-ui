// @flow
import type { Element } from "react";

import ParkingSpaceContainer from "../components/parking_space/ParkingSpaceContainer";

import React from "react";
import { useEffect, useState } from "react";
import Legend from "../components/misc/Legend";
import VehicleParking from "../components/forms/VehicleParking";
import VehicleUnparking from "../components/forms/VehicleUnparking";
import AddRemoveGate from "../components/forms/AddRemoveGate";
import { getVehicleTypes } from "../api/vehicle_type";
import AddParkingSpace from "../components/forms/AddParkingSpace";

export default function Home(): Element<"main"> {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getVehicleTypes()
      .then((r) => setTypes(r.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <main className="container-fluid min-vh-100 bg-gray-200 py-5">
      <div className="container py-1">
        <div className="row">
          <div className="col-12">
            <Legend />
          </div>
          <div className="col-12">
            <VehicleParking vehicleTypes={types} />
            <VehicleUnparking />
            <div className="d-flex justify-content-between align-items-center">
              <AddRemoveGate />
              <AddParkingSpace vehicleTypes={types} />
            </div>
          </div>
        </div>
        <ParkingSpaceContainer />
      </div>
    </main>
  );
}
