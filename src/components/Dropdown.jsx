import React, { useState } from "react";

export default function Dropdown({ options }) {
  const [skill, setSkill] = useState("");
  const [items, setItems] = useState(options);
  const [drop, setDrop] = useState(false);
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      setDrop(false);
    }
  };

  const handleItem = (skill) => {
    setItems((prev) => prev.filter((item) => item !== skill));
    setSkill(skill);
  };
  return (
    <div
      onClick={(e) => handleClick(e)}
      className="h-screen flex-col mx-auto justify-center items-center flex"
    >
      Dropdown
      <h1 onClick={() => setDrop(!drop)}>{skill ? skill : "Select Skills"}</h1>
      {drop &&
        items.map((item) => (
          <button
            onClick={() => {
              (handleItem(item), setDrop(false));
            }}
          >
            {item}
          </button>
        ))}
    </div>
  );
}
