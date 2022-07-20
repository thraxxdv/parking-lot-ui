// @flow
import type { Element } from "react";

import React from "react";

interface Props {
  vehicleId: string;
  isOccupied: boolean;
  leftOn: string;
  parkedOn: string;
  occupyingVehicleType: string;
}

function VehicleHeader({
  vehicleId,
  isOccupied,
  leftOn,
  parkedOn,
  occupyingVehicleType,
}: Props): Element<"div"> {
  return (
    <div className={`${isOccupied ? "bg-red" : "bg-primary"} py-2 my-2`}>
      <p className="text-center mb-0 text-white">
        {vehicleId ? `${vehicleId} (${occupyingVehicleType})` : "---"}
      </p>
    </div>
  );
}

export default VehicleHeader;
