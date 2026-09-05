// import React, { useEffect, useState } from "react";

// export default function Autocomplete({ options }) {
//   const [text, setText] = useState("");
//   const [debounce, setDebounce] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebounce(text);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, [text]);

//   useEffect(() => {
//     async function showList() {
//       try {
//         setLoading(true);
//         setError(null);
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await res.json();
//         setResults(data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     showList();
//   }, []);

//   const filterOption =
//     text.length === 0
//       ? []
//       : results.filter((item) =>
//           item.username.toLowerCase().includes(debounce.toLowerCase()),
//         );

//   return (
//     <div className="h-screen flex mx-auto justify-center items-center flex-col">
//       Autocomplete
//       {loading && <h1>Loading...</h1>}
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         className="bg-amber-100 rounded-2xl"
//       />
//       {filterOption.map((item) => (
//         <h1>{item.username}</h1>
//       ))}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function Autocomplete({ options }) {
  const [text, setText] = useState("");
  const [debounce, setDebounce] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text);
    }, 2000);
    return () => clearTimeout(timer);
  }, [text]);

  useEffect(() => {
    async function fetching() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setResults(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetching();
  }, []);

  const filterOption = results.filter((item) =>
    item.toLowerCase().includes(debounce.toLowerCase()),
  );

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      Autocomplete
      <div>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
          className="bg-amber-200 rounded-2xl"
        />
        {filterOption && filterOption.map((item) => <h1>{item}</h1>)}
      </div>
    </div>
  );
}
