import React, { useCallback, useState } from "react";
import ChildCallback from "./ChildCallback";

export default function CallbackComponent() {
  const [count, setCount] = useState(0);
  console.log("Parent rendered");
  const sayHello = useCallback(() => {
    console.log("Hello");
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <ChildCallback onClick={sayHello} />
    </div>
  );
}
