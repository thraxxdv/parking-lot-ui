// @flow
import type { Element } from "react";

import React from "react";

function VehicleParking(): Element<"div"> {
  return (
    <div className="d-flex my-3">
      <select name="gate" id="gate" className="form-select me-3">
        <option value="">test</option>
      </select>
      <select name="vehicle-type" id="vehicle-type" className="form-select me-3">
        <option value="">test vehicle type</option>
      </select>
      <input
        type="text"
        className="form-control me-3"
        id="vehicle-id"
        name="vehicle-id"
      />
      <input type="datetime-local" name="parked-on" id="parked-on" className="form-control me-3" />
      <button className="btn btn-primary w-50 text-white fw-bold">Park Vehicle</button>
    </div>
  );
}

export default VehicleParking;
