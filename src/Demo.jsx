import React, { useRef, useState } from "react";

export default function Demo() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);


  const countRef = useRef(0)
  const ourDebounce = (fn, delay) => {
    let timer;

    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const handleClickCount = () => {
    setCount(countRef.current++);
  };

  const debouncedChange = ourDebounce(handleChange, 1000);

  return (
    <div>
      <input ref={countRef} type="text" onChange={debouncedChange} />
      <h1  onClick={handleClickCount}>{inputValue}</h1>
      <h1>{count}</h1>
    </div>
  );
}
