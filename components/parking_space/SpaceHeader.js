// @flow
import type { Element } from "react";

import React from "react";

interface Props {
  spaceId: number;
  vehicleType: string
}

function SpaceHeader({ spaceId, vehicleType }: Props): Element<"div"> {
  return (
    <div className={`bg-gray-300 p-2 my-2`}>
      <p className="text-center mb-0 fw-bold text-uppercase">Parking Space #{spaceId} ({vehicleType})</p>
    </div>
  );
}

export default SpaceHeader;
