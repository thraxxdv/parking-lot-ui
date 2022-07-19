// @flow
import type { Element } from "react";

import React from "react";

interface Props {
    vehicleId: string,
    isOccupied: boolean,
    leftOn: string,
    parkedOn: string
}

function VehicleHeader({vehicleId, isOccupied, leftOn, parkedOn} : Props) : Element<'div'> {
  return (
    <div className="bg-orange p-2 my-2">
      <p className="text-center mb-0 text-white">Vehicle 1234</p>
    </div>
  );
}

export default VehicleHeader;
