import React, { useState } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({ children }) {
  
  const [color,setColor] = useState("bg-green-300")
  
  // const data = {
  //   name: "ajinkya",
  //   age: 22,
  //   dark: "bg-amber-200",
  // };

  return <UserContext.Provider value={{color,setColor}}>{children}</UserContext.Provider>;
}
