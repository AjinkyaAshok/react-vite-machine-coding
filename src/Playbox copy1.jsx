import React, { useCallback, useRef, useState } from "react";
import Circle from "./Circle";

function Playbox() {
  const [debounceValue, setDebounceValue] = useState(0);
  const [throttleValue, setThrottleValue] = useState(0);
  const [normalValue, setNormalValue] = useState(0);

  const debounceInputCalled = useRef(0);
  const throttleInputCalled = useRef(0);

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

  const handleChangeNormal = () => {
    const newVal = normalValue + 1;
    setNormalValue(newVal);
  };

  const handleChangeDebounced = () => {
    // console.log(e.target.value);
    // const newVal = (debounceValue) => debounceValue + 1;
    setDebounceValue(debounceInputCalled.current);
  };
  const handleChangeThrottle = () => {
    // console.log(e.target.value);
    // const newVal = (throttleValue) => throttleValue + 1;
    setThrottleValue(throttleInputCalled.current);
  };

  const handleDebounceCount = () => {
    debounceInputCalled.current = debounceInputCalled.current + 1;
  };

  const handleThrottleCount = () => {
    throttleInputCalled.current = throttleInputCalled.current + 1;
  };

  const debouncedText = useCallback(
    ourDebounce(handleChangeDebounced, 1000),
    [],
  );
  const throttledText = useCallback(
    ourThrottle(handleChangeThrottle, 1000),
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
          onClick={() => {
            handleDebounceCount();
            debouncedText();
          }}
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
          onClick={() => {
            handleThrottleCount();
            throttledText();
          }}
          style={{ backgroundColor: "red", width: "200px", height: "200px" }}
        >
          <div
            style={{ backgroundColor: "black", width: "500px", height: "50px" }}
          ></div>
        </div>

        <h1>{throttleValue}</h1>
      </div>
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
    </>
  );
}

export default Playbox;
