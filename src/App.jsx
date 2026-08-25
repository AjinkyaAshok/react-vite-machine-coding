import React from "react";
import "./index.css";
import Todo from "./components/Todo";
import Tabs from "./components/Tabs";
import Accordian from "./components/Accordian";
import Modal from "./components/Modal";
import StarRating from "./components/StarRating";
import ProgressBar from "./components/ProgressBar";
import Toast from "./components/Toast";

export default function App() {
 
  return (
    <div>
      {/* <Todo /> */}
      {/* <Tabs/> */}
      {/* <Accordian /> */}
      {/* <Modal /> */}
      {/* <StarRating/> */}
      {/* <ProgressBar value={100}/> */}
      <Toast value={"hello"} type={"error"} />
    </div>
  );
}
