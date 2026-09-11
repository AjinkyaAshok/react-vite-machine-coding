import React, { lazy} from "react";

const About = lazy(() => import("./About"));

export default function Home() {
  return (
    <div>
      Home
        <About />
    </div>
  );
}
