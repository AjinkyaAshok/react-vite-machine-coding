import React from "react";

const ChildMemo = React.memo(function ChildMemo({ value }) {
  console.log("child rendered");
  return (
    <div>
      ChildMemo
      <h1>{value}</h1>
    </div>
  );
});

export default ChildMemo;
