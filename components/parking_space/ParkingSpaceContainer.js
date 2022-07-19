// @flow
import React from 'react'
import { useEffect, useState } from "react";
import ParkingSpaceItem from './ParkingSpaceItem'
import type { Element } from "react";
import { getParkingSpaces } from "../../api/parking_space";

function ParkingSpaceContainer() : Element<'div'> {

  const [parkingSpaces, setParkingSpaces] = useState([]);

  useEffect(() => {
    getParkingSpaces().then(r => setParkingSpaces(r.data))
    .catch(e => console.log(e))
  }, [])
  
  return (
    <div className="row">
      {parkingSpaces.map(obj => <ParkingSpaceItem parkingData={obj} key={obj.id} />)}
    </div>
  )
}

export default ParkingSpaceContainer