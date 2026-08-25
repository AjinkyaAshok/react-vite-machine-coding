import React, { useEffect, useState } from "react";

export default function Toast({ message, type }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const styles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  };
  return (
    <div>
      {visible && (
        <h1
          className={`border-2 ${styles[type]} w-max  flex justify-center mx-auto mt-10 p-10`}
        >
          {message} <button onClick={() => setVisible(false)}>X</button>
        </h1>
      )}
    </div>
  );
}
