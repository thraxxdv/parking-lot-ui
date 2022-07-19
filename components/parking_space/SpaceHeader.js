// @flow
import type { Element } from "react";

import React from "react";

interface Props {
  spaceId: number;
}

function SpaceHeader({ spaceId }: Props): Element<"div"> {
  return (
    <div className={`bg-gray-500 p-2 my-2`}>
      <p className="text-center mb-0 fw-bold text-uppercase">Parking Space #{spaceId}</p>
    </div>
  );
}

export default SpaceHeader;
