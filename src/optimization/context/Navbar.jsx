import React, { useContext } from "react";
import About from "./About";
import { UserContext } from "./UserContext";

export default function Navbar() {
  const { color, setColor } = useContext(UserContext);

  const handleTheme = () => {
    setColor(prev => !prev);
  };

  return (
    <div className={color ?"bg-amber-300" : "bg-green-500" } onClick={handleTheme}>
      Navbar
      <About />
    </div>
  );
}
