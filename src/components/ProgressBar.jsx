import React, { useEffect, useState } from "react";

export default function ProgressBar({ value }) {
  const [bar, setBar] = useState(0);
  const progress = Math.min(100, Math.max(0, value));
  useEffect(() => {
    const interval = setInterval(() => {
      setBar((prev) => {
        if (prev >= progress) {
          clearInterval(interval);
          return progress;
        }
        return Math.min(prev + 10, progress);
      });
    }, 1000);
  }, [progress]);

  return (
    <div className="flex flex-col h-screen mx-auto justify-center items-center">
      <h1>ProgressBar </h1>
      <div className="w-100 rounded-4xl h-10 border-2 text-center">
        <div
          style={{ width: `${bar}%` }}
          className="w-50 h-9 transition-all duration-300 rounded-4xl bg-amber-200"
        >
          {bar}
        </div>
      </div>
    </div>
  );
}
