import React, { useEffect, useState } from "react";

function useFetchMain({ url }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, []);
  return { user };
}

export default useFetchMain;
