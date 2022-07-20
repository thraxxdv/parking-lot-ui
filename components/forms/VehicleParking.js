// @flow
import type { Element } from "react";

import { parkVehicle } from "../../api/parking_space";

import React from "react";
import { useState } from "react";

function VehicleParking(): Element<"form"> {
  // Data
  const [gates, setGates] = useState([]);
  const [types, setTypes] = useState([]);

  // For inputs
  const [selectedGate, setSelectedGate] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [vehicleId, setVehicleId] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    parkVehicle(parseInt(selectedGate), parseInt(selectedType), timestamp, vehicleId)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };

  return (
    <form className="d-flex my-3" onSubmit={handleSubmit}>
      <select name="gate" id="gate" className="form-select me-3" onChange={(e) => setSelectedGate(e.target.value)}>
        <option value="1">test</option>
        <option value="2">test</option>
      </select>
      <select
        name="vehicle-type"
        id="vehicle-type"
        className="form-select me-3"
        onChange={(e) => setSelectedType(e.target.value)}
      >
      <option value="1">test vehicle type</option>
        <option value="2">test vehicle type</option>
      </select>
      <input
        type="text"
        className="form-control me-3"
        id="vehicle-id"
        name="vehicle-id"
        value={vehicleId}
        onChange={(e) => setVehicleId(e.target.value)}
      />
      <input
        type="datetime-local"
        name="parked-on"
        id="parked-on"
        className="form-control me-3"
        onChange={(e) => setTimestamp(e.target.value)}
      />
      <button className="btn btn-primary w-50 text-white fw-bold">
        Park Vehicle
      </button>
    </form>
  );
}

export default VehicleParking;
