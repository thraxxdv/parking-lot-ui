// @flow
import type { Element } from "react";

import React from 'react'

function ParkingSpaceItem(): Element<'div'> {
  return (
    <div className="col-lg-3">
        <div className="bg-white p-3">
            <h4 className="text-center">Space #1</h4>
        </div>
    </div>
  )
}

export default ParkingSpaceItem