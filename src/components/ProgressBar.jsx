import React, { useEffect, useState } from "react";

export default function ProgressBar({ value }) {
  const [bar, setBar] = useState(0);
  const progress = Math.min(100, Math.max(0, value));

  useEffect(() => {
  const interval = setInterval(() => {
    setBar((prev) => {
     if(prev >= progress){
        clearInterval(interval)
        return progress
     }

      return Math.min(prev + 10, progress);
    });
  }, 500);

  return () => clearInterval(interval);
}, [progress]);

  return (
    <div className="h-screen flex-col flex mx-auto justify-center items-center">
      <h1>Progress Bar</h1>
      <div className="w-100 border-2 h-10 absolute">
        <div
          style={{ width: `${bar}%` }}
          className="relative transition-all duration-300 bg-amber-100 h-9 flex justify-center items-center"
        >
          {bar}%
        </div>
      </div>
    </div>
  );
}
