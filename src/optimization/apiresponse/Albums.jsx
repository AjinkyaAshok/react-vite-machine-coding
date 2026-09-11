import React, { useEffect, useState } from 'react'

export default function Albums() {
     const [result, setResult] = useState([]);
    
      useEffect(() => {
        async function list() {
          const res = await fetch("https://jsonplaceholder.typicode.com/albums");
          const data = await res.json();
          setResult(data);
        }
        list();
      }, []);
  return (
    <div>
      Album
      {result.map((item) => (
        <h2>{item.title}</h2>
      ))}
    </div>
  )
}
