// @flow
import type { Element } from "react";

import { getGates } from "../../api/gate";
import { parkVehicle } from "../../api/parking_space";

import { getVehicleTypes } from "../../api/vehicle_type";

import React from "react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import LaravelValidationParser from "../../utils/LaravelValidationParser";
import HttpErrorHandler from "../../utils/HttpErrorHandler";

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

    parkVehicle(
      parseInt(selectedGate),
      parseInt(selectedType),
      timestamp,
      vehicleId
    )
      .then((r) =>
        toast("Vehicle parked", {
          type: "success",
        })
      )
      .catch((e) => {
        HttpErrorHandler(e, () => {
          let errors = LaravelValidationParser(e.response.data.errors);
          errors.forEach((error) => {
            toast(error, { type: "error" });
          });
        });
      });
  };

  useEffect(() => {
    getVehicleTypes()
      .then((r) => setTypes(r.data))
      .catch((e) => console.log(e));

    getGates()
      .then((r) => setGates(r.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <form className="d-flex my-3" onSubmit={handleSubmit}>
      <ToastContainer />
      <select
        name="gate"
        id="gate"
        className="form-select me-3"
        onChange={(e) => setSelectedGate(e.target.value)}
        defaultValue={0}
      >
        <option value="0" disabled hidden>
          Select Gate...
        </option>
        {gates.map((obj) => (
          <option value={obj.id} key={obj.id}>
            Gate #{obj.id}
          </option>
        ))}
      </select>
      <select
        name="vehicle-type"
        id="vehicle-type"
        className="form-select me-3"
        onChange={(e) => setSelectedType(e.target.value)}
        defaultValue={0}
      >
        <option value="0" disabled hidden>
          Select Vehicle Type...
        </option>
        {types.map((obj) => (
          <option value={obj.id} key={obj.id}>
            {obj.type}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="form-control me-3"
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
