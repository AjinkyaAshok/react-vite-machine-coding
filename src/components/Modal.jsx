import React, { useEffect, useState } from "react";

export default function Modal() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const handlekey = (e) => {
      if (e.key === "Escape") {
        setModal(false);
      }
    };
    window.addEventListener("keydown", handlekey);
    return () => {
      window.removeEventListener("keydown", handlekey);
    };
  }, []);

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  };

  return (
    <div
      onClick={handleBackdrop}
      className="flex h-screen mx-auto justify-center items-center"
    >
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
