// @flow
import type { Element } from "react";

import React from 'react'

function ParkingSpaceItem(): Element<'div'> {
  return (
    <div className="col-lg-3">
        <h4 className="text-center">Space #1</h4>
    </div>
  )
}

export default ParkingSpaceItem