import React from "react";
import Photos from "./Photos";
import Comments from "./Comments";
import Albums from "./Albums";

function Home() {
  return (
    <div className="flex">
      Home
      <Photos />
      <Albums />
      <Comments />
    </div>
  );
}

export default Home;
