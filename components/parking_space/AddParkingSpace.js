// @flow
import type { Element } from "react";

import React from "react";
import { useState } from "react";

interface Props {
  vehicleTypes: Array<Object>;
}

function AddParkingSpace({ vehicleTypes }: Props): Element<"form"> {
  const [selectedType, setSelectedType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="bg-gray-500 p-2 d-flex flex-grow-1"
      onSubmit={handleSubmit}
    >
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
        {vehicleTypes.map((obj) => (
          <option value={obj.id} key={obj.id}>
            {obj.type}
          </option>
        ))}
      </select>
      <button className="btn btn-primary text-white fw-bold w-50">
        Add Parking Space
      </button>
    </form>
  );
}

export default AddParkingSpace;
