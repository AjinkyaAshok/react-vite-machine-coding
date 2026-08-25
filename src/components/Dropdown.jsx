import React, { useEffect, useRef, useState } from "react";

export default function Dropdown({ options }) {
  const [drop, setDrop] = useState(false);
  const [selected, setSelected] = useState("SELECT FRAMWORK ");
  const dropdownRef = useRef(null);

  const handleClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.addEventListener("mousedown", handleClick);
    };
  });

  return (
    <div ref={dropdownRef}>
      <h1 onClick={() => setDrop(!drop)}>
        {selected}
        {drop ? "▲" : "▼"}
      </h1>
      {drop &&
        options.map((item) => (
          <div
            onClick={() => {
              setSelected(item);
              setDrop(false);
            }}
          >
            {item}
          </div>
        ))}
    </div>
  );
}
