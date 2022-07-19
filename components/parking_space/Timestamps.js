// @flow
import type { Element } from "react";

import React from "react";

interface Props {
  parkedOn: string;
  leftOn: string;
}

function Timestamps({ parkedOn, leftOn }: Props): Element<"div"> {
  const style = { fontSize: "12px" };

  return (
    <div className="">
      {parkedOn ? (
        <>
          <p className="mb-0 text-center text-uppercase" style={style}>
            parked on
          </p>
          <p className="mb-0 text-center" style={style}>
            {parkedOn}
          </p>
        </>
      ) : null}
      {leftOn ? (
        <>
          <p className="mb-0 text-center text-uppercase mt-2" style={style}>
            left on
          </p>
          <p className="mb-0 text-center" style={style}>
            {leftOn}
          </p>
        </>
      ) : null}
    </div>
  );
}

export default Timestamps;
