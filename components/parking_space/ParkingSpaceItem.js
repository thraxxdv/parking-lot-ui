// @flow
import type { Element } from "react";

import React from "react";

function ParkingSpaceItem(): Element<"div"> {
  return (
    <div className="col-lg-3">
      <div className="bg-white p-3">
        <div className="bg-blue p-2 my-2">
          <p className="text-center mb-0 text-uppercase fw-bold text-white">Gate #1</p>
        </div>
        <div className="bg-gray-500 p-2 my-2">
          <p className="text-center mb-0 fw-bold text-uppercase">Space #1</p>
        </div>
        <div className="bg-orange p-2 my-2">
          <p className="text-center mb-0 text-white">Vehicle 1234</p>
        </div>
        
        <div>
            <button className="btn btn-secondary text-white d-block mx-auto">Unpark</button>
        </div>
      </div>
    </div>
  );
}

export default ParkingSpaceItem;
