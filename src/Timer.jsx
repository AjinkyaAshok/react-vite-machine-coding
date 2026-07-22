import { useEffect, useState } from "react";

function Timer() {
  const [second, setSecond] = useState(0);
  const [isRunning, setRunning] = useState(false);
  
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  });

  const handleStart = () => {
    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleRest = () => {
    setRunning(false);
    setSecond(0);
  };
  return (
    <>
      <h1>Timer</h1>
      <h1 className="text-2xl">{second}</h1>
      <div className="gap-x-10 flex">
        <button onClick={handleStart}>START</button>
        <button onClick={handlePause}>PAUSE</button>
        <button onClick={handleRest}>RESET</button>
      </div>
    </>
  );
}

export default Timer;
