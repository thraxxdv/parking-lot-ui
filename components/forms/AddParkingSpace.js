// @flow
import type { Element } from "react";

import { createParkingSpace } from "../../api/parking_space";

import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import HttpErrorHandler from "../../utils/HttpErrorHandler";
import LaravelValidationParser from "../../utils/LaravelValidationParser";

interface Props {
  vehicleTypes: Array<Object>;
}

function AddParkingSpace({ vehicleTypes }: Props): Element<"form"> {
  const [selectedType, setSelectedType] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    createParkingSpace(selectedType)
      .then((r) =>
        toast("Parking spaced added successfuly", {
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
