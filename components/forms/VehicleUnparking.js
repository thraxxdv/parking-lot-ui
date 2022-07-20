// @flow
import type { Element } from "react";

import { unparkVehicle } from "../../api/parking_space";

import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import LaravelValidationParser from "../../utils/LaravelValidationParser";
import HttpErrorHandler from "../../utils/HttpErrorHandler";

function VehicleUnparking(): Element<"form"> {
  const [vehicleId, setVehicleId] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleUnpark = (e) => {
    e.preventDefault();
    unparkVehicle(timestamp, vehicleId)
      .then((r) => {
        let { parked_on, left_on, fee } = r.data;
        toast(
          `${vehicleId} has been unparked. Duration ${parked_on} - ${left_on} with ₱${fee} fee.`,
          {
            type: "info",
            autoClose: false,
          }
        );
      })
      .catch((e) => {
        HttpErrorHandler(e, () => {
          let errors = LaravelValidationParser(e.response.data.errors);
          errors.forEach((error) => {
            toast(error, { type: "error" });
          });
        });
      });
  };

  return (
    <form className="d-flex my-3 bg-gray-500 p-2" onSubmit={handleUnpark}>
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
