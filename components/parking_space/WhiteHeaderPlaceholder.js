// @flow
import type { Element } from "react";

import React from 'react'

function WhiteHeaderPlaceholder() : Element<'div'> {
  return (
    
    <div className="bg-white p-2 my-2">
      <p className="text-center mb-0 text-uppercase fw-bold text-white">
        &nbsp;
      </p>
    </div>
  )
}

export default WhiteHeaderPlaceholder