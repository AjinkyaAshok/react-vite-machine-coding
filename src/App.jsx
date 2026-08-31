import React, { useState } from "react";
import "./index.css";
import Todo from "./components/Todo";
import Tabs from "./components/Tabs";
import Accordian from "./components/Accordian";
import Modal from "./components/Modal";
import StarRating from "./components/StarRating";
import ProgressBar from "./components/ProgressBar";
import Toast from "./components/Toast";
import Dropdown from "./components/Dropdown";
import Autocomplete from "./components/Autocomplete";
import Pagination from "./components/Pagination";
import Carousel from "./components/Carousel";
import OTP from "./components/OTP";

export default function App() {

  return (
    <div>
      {/* <Todo /> */}
      {/* <Tabs/> */}
      {/* <Accordian /> */}
      {/* <Modal /> */}
      {/* <StarRating/> */}
      {/* <ProgressBar value={100}/> */}
      {/* <Toast message={"hello"} type={"error"}  /> */}
      {/* <Dropdown options={["React","Next","Angular"]} /> */}
      {/* <Autocomplete options={["React", "Vue", "Angular", "Svelte", "Next.js"]}/> */}
      {/* <Pagination /> */}
      {/* <Carousel /> */}
      <OTP/>
    </div>
  );
}
