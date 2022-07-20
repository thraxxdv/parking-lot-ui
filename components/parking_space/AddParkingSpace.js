// @flow
import type { Element } from "react";

import React from "react";

function AddParkingSpace(): Element<"div"> {
  return (
    <div className="bg-gray-500 p-2">
      <button className="btn btn-primary text-white fw-bold">
        Add Parking Space
      </button>
    </div>
  );
}

export default AddParkingSpace;
