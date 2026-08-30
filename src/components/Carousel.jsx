import React, { useState } from "react";

export default function Carousel() {
  const [image, setImage] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1684445034763-013f0525c40c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1710609942195-b9dab8f48fc6?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="flex flex-col mx-auto h-screen justify-center items-center">
      <h1>Carousel</h1>
      <div className="text-center bg-amber-200 rounded-4xl ">
        <img className="w-50 h-50" src={images[image]} alt="" />
      </div>
      <div className="flex gap-5">
        <button
          onClick={() =>
            setImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
          }
        >
          PREV
        </button>
        {images.map((item, index) => (
          <button onClick={() => setImage(index)} key={item}>
            {index === image ? "*" : "o"}
          </button>
        ))}
        <button
          onClick={() =>
            setImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
          }
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
