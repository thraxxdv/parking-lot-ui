// @flow
import type { Element } from "react";

import ParkingSpaceContainer from "../components/parking_space/ParkingSpaceContainer";

import React from "react"
import Legend from "../components/misc/Legend";
import VehicleParking from "../components/forms/VehicleParking";

export default function Home() : Element<'main'> {
  return (
    <main className="container-fluid min-vh-100 bg-gray-200 py-5">
      <div className="container py-1">
        <div className="row">
          <div className="col-12">
            <Legend />
          </div>
          <div className="col-12">
            <VehicleParking />
          </div>
        </div>
        <ParkingSpaceContainer />
      </div>
    </main>
  );
}
