import React, { useEffect, useState } from "react";
import Images from "./Images";
// import { FixedSizeList } from "react-window";

export default function Photos() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function list() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=1000",
      );
      const data = await res.json();
      setResult(data);
    }
    list();
  }, []);
  return (
    <div>
      Photoss
      {result.map((i) => (
        <Images url={i.thumbnailUrl} title={i.title} />
      ))}
    </div>
  );
}
