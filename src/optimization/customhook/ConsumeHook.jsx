import React from "react";
import useFetch from "./useFetch";

export default function ConsumeHook() {
  const {result}  = useFetch();
  return (
    <div>
      ConsumeHook
      {result.map((item) => 
        <h1>{item.name}</h1>
      )}
    </div>
  );
}
