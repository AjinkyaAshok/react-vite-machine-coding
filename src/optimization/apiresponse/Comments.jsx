import React, { useEffect, useState } from "react";

export default function Comments() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function list() {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setResult(data);
    }
    list();
  }, []);
  return (
    <div>
      Comments
      {result.map((item) => (
        <h2>{item.name}</h2>
      ))}
    </div>
  );
}
