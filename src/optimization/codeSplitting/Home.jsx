import React, { lazy, Suspense } from "react";

const About = lazy(() => import("./About"));

export default function Home() {
  return (
    <div>
      Home
      <Suspense fallback={<p>Loading...</p>}>
        <About />
      </Suspense>
    </div>
  );
}
