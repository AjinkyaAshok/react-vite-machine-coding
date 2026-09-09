import React, { useState } from "react";
import ChildMemo from "./ChildMemo";

export default function ParentMemo() {
  const [count, setCount] = useState(0);
  console.log("parent rendered");
  const value = "ajinkya"
  return (
    <div>
      ParentMemo
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>increse</button>
      <ChildMemo value={value} />
    </div>
  );
}
