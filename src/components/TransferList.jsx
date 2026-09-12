import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import React, { useState } from "react";

export default function TransferList() {
  const [available, setAvailable] = useState([
    "React",
    "Next",
    "Tailwind",
    "Performance",
    "Core Web Vitals",
  ]);
  const [selected, setSelected] = useState([]);
  const [checked, setChecked] = useState([]);

  const handleCheck = (item) => {
    if (checked.includes(item)) {
      setChecked(checked.filter((i) => i !== item));
    } else {
      setChecked([...checked, item]);
    }
  };

  const moveRight = () => {
    setSelected([...selected, ...checked]);
    setAvailable(available.filter((i) => !checked.includes(i)));
    setChecked([]);
  };
  const moveLeft = () => {
    setAvailable([...available, ...checked]);
    setSelected(selected.filter((i) => !checked.includes(i)));
    setChecked([]);
  };

  const handleAll = () => {
    setSelected([...selected, ...available]);
    setAvailable([]);
    setChecked([]);
  };
  const handleClose = () => {
    setAvailable([...available, ...selected]);
    setSelected([]);
    setChecked([]);
  };
  return (
    <div className="flex h-screen justify-center items-center mx-auto">
      TransferList
      <div className="flex justify-evenly w-100 h-100 border-2">
        <div>
          <h1>Available</h1>
          <div className="border-2 w-30 h-60">
            {available.map((item) => (
              <h1 key={item}>
                <span>
                  <input
                    onChange={() => handleCheck(item)}
                    type="checkbox"
                    name=""
                    id=""
                    checked={checked.includes(item)}
                  />
                </span>
                {item}
              </h1>
            ))}
          </div>
        </div>
        <div className="flex flex-col ">
          <button onClick={moveRight}>
            <ArrowRight />
          </button>
          <button onClick={moveLeft}>
            <ArrowLeft />
          </button>
          <button onClick={handleAll}>
            <ArrowBigRight />
          </button>
          <button onClick={handleClose}>
            <ArrowBigLeft />
          </button>
        </div>
        <div>
          <h1>Selected</h1>
          <div className="border-2 flex flex-col w-30 h-60">
            {selected.map((item) => (
              <h1>
                <span>
                  <input
                    onChange={() => handleCheck(item)}
                    checked={checked.includes(item)}
                    type="checkbox"
                    name=""
                    id=""
                  />
                </span>
                {item}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
