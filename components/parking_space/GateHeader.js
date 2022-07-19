// @flow
import type { Element } from "react";

import React from "react";

interface Props {
    gateNumber: number
}

function GateHeader({gateNumber} : Props) : Element<'div'> {
  return (
    <div className="bg-blue p-2 my-2">
      <p className="text-center mb-0 text-uppercase fw-bold text-white">
        Gate #{gateNumber}
      </p>
    </div>
  );
}

export default GateHeader;
