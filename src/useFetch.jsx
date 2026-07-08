import React, { useEffect, useState } from "react";

function useFetch() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setItem(data);
    };
    fetchData();
  }, []);
  return { item };
}

export default useFetch;
