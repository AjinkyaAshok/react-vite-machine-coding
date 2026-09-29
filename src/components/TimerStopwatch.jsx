import React, { useEffect, useState } from "react";

export default function TimerStopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => setTime((prev) => prev + 1), 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning]);

  const formatTime = (time) => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;

    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto h-screen">
      TimerStopwatch
      <h1>{formatTime(time)}</h1>
      <div className="">
        <button onClick={() => setIsRunning(true)}>START</button>
        <button onClick={() => setIsRunning(false)}>PAUSE</button>
        <button
          onClick={() => {
            setTime(0);
            setIsRunning(false);
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
