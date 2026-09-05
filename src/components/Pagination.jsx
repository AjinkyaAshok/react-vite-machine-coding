import React, { useState } from "react";

export default function Pagination() {
  const [page, setPage] = useState(1);

  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];

  const itemsPerPage = 5;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;

  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mx-auto flex-col flex justify-center items-center h-screen">
      <h1>Pagination</h1>
      {currentItems.map((items) => (
        <h1 className="flex flex-col">{items}</h1>
      ))}
      <div>
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          PREV
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className={page === index + 1 ? "p-2 bg-amber-200" : "p-1"}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

// import React, { useState } from "react";

// export default function Pagination() {
//   const [page, setPage] = useState(0);
//   const items = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//     22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
//     41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
//   ];

//   const totalItems = items.length;
//   const itemsPerPage = 5;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const startIndex = (page - 0) * itemsPerPage;

//   const itemsToshow = items.slice(startIndex, startIndex + itemsPerPage);
//   return (
//     <div className="mx-auto flex-col flex h-screen justify-center items-center">
//       Pagination
//       {itemsToshow.map((i) => (
//         <h1>{i}</h1>
//       ))}
//       <div className=" rounded-2xl p-2">
//         <button
//           disabled={page <= 0}
//           onClick={() => setPage((prev) => prev - 1)}
//         >
//           PREV
//         </button>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             className={page === index + 1 ? "bg-white" : "bg-amber-100"}
//             onClick={() => setPage(index + 1)}
//             key={index}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           disabled={page === totalPages}
//           onClick={() => setPage((prev) => prev + 1)}
//         >
//           NEXT
//         </button>
//       </div>
//     </div>
//   );
// }


