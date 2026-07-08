import React, { useCallback, useRef, useState } from "react";
import Circle from "./Circle";

function Playbox() {
  const [normalValue, setNormalValue] = useState(0);
  const [debounceValue, setDebounceValue] = useState(0);
  const [throttleValue, setTrottleValue] = useState(0);

  const DebounceCount = useRef(0);
  console.log(DebounceCount)
  const ThrottleCount = useRef(0);

  const ourDebounce = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const ourThrottle = (fn, delay) => {
    let timer;
    return (...args) => {
      if (!timer) {
        fn(...args);
        timer = setTimeout(() => {
          timer = null;
        }, delay);
      }
    };
  };

  const handleDebounceCount = () => {
    DebounceCount.current = DebounceCount.current + 1;
  };

  const handleThrottleCount = () => {
    ThrottleCount.current = ThrottleCount.current + 1;
  };
  const handleChangeNormal = () => {
    setNormalValue((prev) => prev + 1);
  };

  const handleChangeDebounce = () => {
    setDebounceValue(DebounceCount.current);
  };

  const handleChangeThrottle = () => {
    setTrottleValue(ThrottleCount.current);
  };



  const debounceChange = useCallback(
    ourDebounce(handleChangeDebounce, 200),
    [],
  );
  const throttleChange = useCallback(
    ourThrottle(handleChangeThrottle, 600),
    [],
  );

  return (
    <>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          onClick={handleChangeNormal}
          style={{ backgroundColor: "red", width: "200px", height: "200px" }}
        >
          <div
            style={{ backgroundColor: "black", width: "500px", height: "50px" }}
          ></div>
        </div>

        <h1>{normalValue}</h1>
      </div>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          onClick={()=>{debounceChange(),handleDebounceCount()}}
          style={{ backgroundColor: "red", width: "200px", height: "200px" }}
        >
          <div
            style={{ backgroundColor: "black", width: "500px", height: "50px" }}
          ></div>
        </div>

        <h1>{debounceValue}</h1>
      </div>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          onClick={()=>{throttleChange(),handleThrottleCount()}}
          style={{ backgroundColor: "red", width: "200px", height: "200px" }}
        >
          <div
            style={{ backgroundColor: "black", width: "500px", height: "50px" }}
          ></div>
        </div>

        <h1>{throttleValue}</h1>
      </div>
    </>
  );
}

export default Playbox;
