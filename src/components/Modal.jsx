

import React, { useState } from "react";

export default function Modal() {
  const [modal, setModal] = useState(false);
  return (
    <div className="flex h-screen mx-auto justify-center items-center">
      {modal && "MODAL =>"}
      {!modal ? (
        <button
          className="bg-amber-100 p-2 rounded-2xl"
          onClick={() => setModal(true)}
        >
          OPEN
        </button>
      ) : null}

      {modal && (
        <div className="bg-amber-100 h-50 w-50 rounded-2xl text-center flex items-center p-2">
          <h1>HI THIS IS REACT SPEAKING</h1>{" "}
          <button onClick={() => setModal(false)}>X</button>
        </div>
      )}
    </div>
  );
}
