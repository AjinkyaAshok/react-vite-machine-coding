import React, { useEffect, useState } from "react";

function useFetch() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function list() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setResult(data);
    }
    list();
  },[]);

  return {result};
}
export default useFetch;
