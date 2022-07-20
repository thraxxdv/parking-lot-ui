// @flow
import type { Element } from "react";

import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { createGate, deleteGate } from "../../api/gate";

function AddRemoveGate(): Element<"form"> {
  const [nearestSpace, setNearestSpace] = useState("");

  const handlePress = (isDelete = true) => {
    let call = isDelete ? deleteGate(nearestSpace) : createGate(nearestSpace);

    call
      .then((r) => {
        let msg = isDelete ? "Gate deleted" : "Gate added";
        toast(msg, {
          type: isDelete ? "info" : "success",
        });
      })
      .catch((e) => console.log(e));
  };

  return (
    <form className="d-flex my-1 bg-gray-500 p-2 flex-grow-1 me-3">
      <ToastContainer />
      <input
        type="text"
        className="form-control me-3 flex-grow-1"
        id="nearest-space"
        name="nearest-space"
        value={nearestSpace}
        onChange={(e) => setNearestSpace(e.target.value)}
        placeholder="Place Gate Near"
      />

      <button
        className="btn btn-primary text-white fw-bold me-3 w-50"
        type="button"
        onClick={() => handlePress(false)}
      >
        Add Gate
      </button>
      <button
        className="btn btn-red text-white fw-bold w-50"
        type="button"
        onClick={() => handlePress()}
      >
        Remove Gate
      </button>
    </form>
  );
}

export default AddRemoveGate;
