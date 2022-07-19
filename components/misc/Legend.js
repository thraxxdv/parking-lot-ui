// @flow
import type { Element } from "react";

import LegendItem from "./LegendItem";

import React from "react";

function Legend(): Element<"div"> {
  return (
    <div className="d-flex">
      <LegendItem color="blue" label="Gate" />
      <LegendItem color="gray-300" label="Parking Space" />
      <LegendItem color="primary" label="Available" />
      <LegendItem color="red" label="Occupied" />
    </div>
  );
}

export default Legend;
