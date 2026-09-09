import React from "react";

const ChildCallback = React.memo(function ChildCallback({ onClick }) {
  console.log("Child callback rendered");

  return <button onClick={onClick}>Say Hello</button>;
});

// export default function ChildCallback({ onClick }) {
//   console.log("Child callback rendered");

//   return <button onClick={onClick}>Say Hello</button>;
// }

export default ChildCallback;
