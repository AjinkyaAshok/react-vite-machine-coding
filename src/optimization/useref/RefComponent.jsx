import React, { useRef, useState } from "react";

export default function RefComponent() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  const handleClick = () => {
    console.log(ref.current = ref.current + 1);
    setCount(count + 1);
  };

  return (
    <div>
      RefComponent
      {count}
      {/* <input ref={ref} type="text" className="bg-amber-200" /> */}
      <button onClick={handleClick}>COunt</button>
    </div>
  );
}
