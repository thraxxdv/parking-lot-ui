// @flow
import type { Element } from "react";

import React from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function AddRemoveGate(): Element<"form"> {
  const [gate, setGate] = useState("");

  return (
    <form className="d-flex my-1 bg-gray-500 p-2 flex-grow-1 me-3">
      <ToastContainer />
      <input
        type="text"
        className="form-control me-3 w-25"
        id="gate"
        name="gate"
        value={gate}
        onChange={(e) => setGate(e.target.value)}
        placeholder="Place Gate Near"
      />

      <button className="btn btn-primary text-white fw-bold me-3" type="button">
        Add Gate
      </button>
      <button className="btn btn-red text-white fw-bold" type="button">
        Remove Gate
      </button>
    </form>
  );
}

export default AddRemoveGate;
