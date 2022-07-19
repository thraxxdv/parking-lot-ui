// @flow
import React from 'react'
import { useEffect } from "react";
import ParkingSpaceItem from './ParkingSpaceItem'
import type { Element } from "react";
import { getParkingSpaces } from "../../api/parking_space";

function ParkingSpaceContainer() : Element<'div'> {

  useEffect(() => {
    getParkingSpaces().then(r => console.log(r.data))
    .catch(e => console.log(e))
  }, [])
  
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