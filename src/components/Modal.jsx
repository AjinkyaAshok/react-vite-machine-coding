import React, { useState } from "react";

export default function Modal() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button onClick={() => setModal(true)}>Open MOdal</button>
      {modal && (
        <div>
          <p className="border-2 flex justify-center items-center mx-auto p-10 w-max">
            "React is a JavaScript library for building user interfaces."
          </p>
          <button onClick={() => setModal(false)}>close Modal</button>
        </div>
      )}
    </div>
  );
}
