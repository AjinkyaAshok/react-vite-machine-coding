// import { Star } from "lucide-react";
// import React, { useState } from "react";

// export default function StarRating() {
//   const [star, setStar] = useState(0);
//   const [temp, setTemp] = useState(0);
//   const displayRating = temp || star;
//   return (
//     <div className="h-screen flex mx-auto justify-center items-center">
//       Star Rating
//       <div className="border-2 w-max flex">
//         {[1, 2, 3, 4, 5].map((item, index) => (
//           <div
//             onMouseEnter={() => setTemp(item)}
//             onClick={() => setStar(item)}
//             key={index}
//             onMouseLeave={() => setTemp(0)}
//           >
//             {item <= displayRating ? <Star /> : "☆"}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { Star } from "lucide-react";
import React, { useState } from "react";

export default function StarRating() {
  const [star, setStar] = useState(0);
  const [temp, setTemp] = useState(0);
  const displayStar = star || temp;
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      StarRating
      {[1, 2, 3, 4, 5].map((item,index) => (
        <h1
          onMouseLeave={() => setTemp(0)}
          onMouseEnter={() => setTemp(item)}
          onClick={() => setStar(item)}
          className=""
        >
          {item <= displayStar ? <Star /> : "O"}
        </h1>
      ))}
    </div>
  );
}
