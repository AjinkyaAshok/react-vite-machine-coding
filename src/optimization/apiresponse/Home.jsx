import React from "react";
import Photos from "./Photos";
import Comments from "./Comments";
import Albums from "./Albums";
import CallbackComponent from "../callback/CallbackComponent";
import ParentMemo from "../reactmemo/ParentMemo";

function Home() {
  return (
    <div className="flex">
      Home
      <CallbackComponent/>
      {/* <Photos /> */}
      <ParentMemo/>
      <Albums />
      <Comments />
    </div>
  );
}

export default Home;
