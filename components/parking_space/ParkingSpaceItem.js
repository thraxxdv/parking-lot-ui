// @flow
import type { Element } from "react";

import React from "react";
import GateHeader from "./GateHeader";
import SpaceHeader from "./SpaceHeader";
import WhiteHeaderPlaceholder from "./WhiteHeaderPlaceholder";
import VehicleHeader from "./VehicleHeader";

interface Props {
  parkingData: Object;
}

function ParkingSpaceItem({ parkingData }: Props): Element<"div"> {
  return (
    <div className="col-lg-2 my-3">
      <div className="bg-white p-3 h-100">
        {parkingData.gate ? (
          <GateHeader gateNumber={parkingData.gate.id} />
        ) : (
          <WhiteHeaderPlaceholder />
        )}

        {
          <SpaceHeader
            spaceId={parkingData.id}
            vehicleType={parkingData.vehicle_type.type}
          />
        }

        {
          <VehicleHeader
            vehicleId={parkingData.vehicle_id}
            isOccupied={parkingData.is_occupied}
            leftOn={parkingData.left_on}
            parkedOn={parkingData.parked_on}
          />
        }
        
      </div>
    </div>
  );
}

export default ParkingSpaceItem;
