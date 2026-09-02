import React, { useEffect, useState } from "react";

export default function Toast({ message, type, duration }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [type]);
  const list = {
    error: "bg-red-200",
    success: "bg-green-200",
    warning: "bg-yellow-200",
    info: "bg-white",
  };

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      setShow(false);
    }
  };
  return (
    <div
      onClick={(e) => handleClick(e)}
      className="flex h-screen mx-auto justify-center items-center"
    >
      Toast
      {show && (
        <div
          className={`${list[type]} justify-center flex items-center text-center  border-2 bg-red w-50 h-50`}
        >
          <h1>{message}</h1>
          <button onClick={() => setShow(!show)}>X</button>
        </div>
      )}
    </div>
  );
}
