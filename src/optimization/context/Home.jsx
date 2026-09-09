import React from "react";
import Navbar from "./Navbar";
import UserProvider from "./UserProvider";

export default function Home() {
  return (
    <UserProvider>
      Home
      <Navbar />
    </UserProvider>
  );
}
