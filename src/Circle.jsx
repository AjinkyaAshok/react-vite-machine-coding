import React from "react";
const Circle = ({ left, top }) => {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "#304932",
        position: "absolute",
        left: `${left}`,
        top: `${top}`,
      }}
    ></div>
  );
};

export default Circle;
