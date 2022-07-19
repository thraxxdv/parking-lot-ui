// @flow
import type { Element } from "react";

import React from "react";

interface Props {
  color: string;
  label: string;
}
function LegendItem({ color, label }: Props): Element<"div"> {
  return (
    <div className="d-flex align-items-center mb-1 me-5">
      <div className="bg-black p-1 rounded-circle">
        <div className={`rounded-circle p-2 bg-${color}`}></div>
      </div>
      <p className="mb-0 ms-1 fw-bold">{label}</p>
    </div>
  );
}

export default LegendItem;
