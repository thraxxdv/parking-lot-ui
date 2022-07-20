// @flow
import type { Element } from "react";

import React from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function VehicleUnparking(): Element<"form"> {
  const [vehicleId, setVehicleId] = useState("");
  const [timestamp, setTimestamp] = useState("");
  return (
    <form className="d-flex my-3 bg-gray-500 p-2">
      <ToastContainer />
      <input
        type="text"
        className="form-control me-3 w-25"
        id="vehicle-id"
        name="vehicle-id"
        value={vehicleId}
        onChange={(e) => setVehicleId(e.target.value)}
        placeholder="Vehicle ID"
      />

      <input
        type="datetime-local"
        name="parked-on"
        id="parked-on"
        className="form-control me-3 w-25"
        onChange={(e) => setTimestamp(e.target.value)}
        value={timestamp}
      />
      <button className="btn btn-secondary text-white fw-bold">
        Unpark Vehicle
      </button>
    </form>
  );
}

export default VehicleUnparking;
