// @flow
import React from 'react'
import ParkingSpaceItem from './ParkingSpaceItem'
import type { Element } from "react";

function ParkingSpaceContainer() : Element<'div'> {
  return (
    <div className="row">
      <ParkingSpaceItem />
      <ParkingSpaceItem />
      <ParkingSpaceItem />
      <ParkingSpaceItem />
    </div>
  )
}

export default ParkingSpaceContainer