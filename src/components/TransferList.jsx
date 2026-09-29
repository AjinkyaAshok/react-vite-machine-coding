// // import {
// //   ArrowBigLeft,
// //   ArrowBigRight,
// //   ArrowLeft,
// //   ArrowRight,
// // } from "lucide-react";
// // import React, { useState } from "react";

// // export default function TransferList() {
// //   const [available, setAvailable] = useState([
// //     "React",
// //     "Next",
// //     "Tailwind",
// //     "Performance",
// //     "Core Web Vitals",
// //   ]);
// //   const [selected, setSelected] = useState([]);
// //   const [checked, setChecked] = useState([]);

// //   const handleCheck = (item) => {
// //     if (checked.includes(item)) {
// //       setChecked(checked.filter((i) => i !== item));
// //     } else {
// //       setChecked([...checked, item]);
// //     }
// //   };

// //   const moveRight = () => {
// //     setSelected([...selected, ...checked]);
// //     setAvailable(available.filter((i) => !checked.includes(i)));
// //     setChecked([]);
// //   };
// //   const moveLeft = () => {
// //     setAvailable([...available, ...checked]);
// //     setSelected(selected.filter((i) => !checked.includes(i)));
// //     setChecked([]);
// //   };

// //   const handleAll = () => {
// //     setSelected([...selected, ...available]);
// //     setAvailable([]);
// //     setChecked([]);
// //   };
// //   const handleClose = () => {
// //     setAvailable([...available, ...selected]);
// //     setSelected([]);
// //     setChecked([]);
// //   };
// //   return (
// //     <div className="flex h-screen justify-center items-center mx-auto">
// //       TransferList
// //       <div className="flex justify-evenly w-100 h-100 border-2">
// //         <div>
// //           <h1>Available</h1>
// //           <div className="border-2 w-30 h-60">
// //             {available.map((item) => (
// //               <h1 key={item}>
// //                 <span>
// //                   <input
// //                     onChange={() => handleCheck(item)}
// //                     type="checkbox"
// //                     name=""
// //                     id=""
// //                     checked={checked.includes(item)}
// //                   />
// //                 </span>
// //                 {item}
// //               </h1>
// //             ))}
// //           </div>
// //         </div>
// //         <div className="flex flex-col ">
// //           <button onClick={moveRight}>
// //             <ArrowRight />
// //           </button>
// //           <button onClick={moveLeft}>
// //             <ArrowLeft />
// //           </button>
// //           <button onClick={handleAll}>
// //             <ArrowBigRight />
// //           </button>
// //           <button onClick={handleClose}>
// //             <ArrowBigLeft />
// //           </button>
// //         </div>
// //         <div>
// //           <h1>Selected</h1>
// //           <div className="border-2 flex flex-col w-30 h-60">
// //             {selected.map((item) => (
// //               <h1>
// //                 <span>
// //                   <input
// //                     onChange={() => handleCheck(item)}
// //                     checked={checked.includes(item)}
// //                     type="checkbox"
// //                     name=""
// //                     id=""
// //                   />
// //                 </span>
// //                 {item}
// //               </h1>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import {
//   ArrowBigLeft,
//   ArrowBigRight,
//   ArrowLeft,
//   ArrowRight,
// } from "lucide-react";
// import React, { useState } from "react";

// export default function TransferList() {
//   const [available, setAvailable] = useState([
//     "ajinkya",
//     "ashok",
//     "ghate",
//     "adgaon",
//     "akot",
//   ]);

//   const [selected, setSelected] = useState([]);
//   const [checkedAvailable, setCheckedAvailable] = useState([]);
//   const [checkedSelected, setCheckedSelected] = useState([]);

//   const handleCheckAvailable = (i) => {
//     if (checkedAvailable.includes(i)) {
//       setCheckedAvailable(checkedAvailable.filter((item) => i !== item));
//     } else {
//       setCheckedAvailable([...checkedAvailable, i]);
//     }
//   };
//   const handleCheckSelected = (i) => {
//     if (checkedSelected.includes(i)) {
//       setCheckedSelected(checkedSelected.filter((item) => i !== item));
//     } else {
//       setCheckedSelected([...checkedSelected, i]);
//     }
//   };

//   const moveRight = () => {
//     setSelected([...selected, ...checkedAvailable]);
//     setAvailable(available.filter((i) => !checkedAvailable.includes(i)));
//     setCheckedAvailable([]);
//   };

//   const moveLeft = () => {
//     setAvailable([...available, ...checkedSelected]);
//     setSelected(selected.filter((i) => !checkedSelected.includes(i)));
//     setCheckedSelected([]);
//   };

//   const moveAllRight = () => {
//     setSelected([...available]);
//     setAvailable([]);
//     setCheckedAvailable([]);
//   };

//   const moveAllLeft = () => {
//     setAvailable([...selected]);
//     setSelected([]);
//     setCheckedSelected([]);
//   };

//   return (
//     <div className="flex items-center justify-center mx-auto h-screen">
//       TransferList
//       <div className="flex justify-evenly h-100 w-100 border-2">
//         <div>
//           Available
//           {available.map((item) => (
//             <h1 key={item}>
//               <span>
//                 <input
//                   onChange={() => handleCheckAvailable(item)}
//                   type="checkbox"
//                   checked={checkedAvailable.includes(item)}
//                   name=""
//                   id=""

//                 />
//               </span>
//               {item}
//             </h1>
//           ))}
//         </div>
//         <div className="flex flex-col">
//           <button onClick={moveRight}>
//             <ArrowRight />
//           </button>
//           <button onClick={moveLeft}>
//             <ArrowLeft />
//           </button>
//           <button onClick={moveAllRight}>
//             <ArrowBigRight />
//           </button>
//           <button onClick={moveAllLeft}>
//             <ArrowBigLeft />
//           </button>
//         </div>
//         <div>
//           Selected
//           {selected.map((i) => (
//             <h1 key={i}>
//               <span>
//                 <input
//                   type="checkbox"
//                   onChange={() => handleCheckSelected(i)}
//                   name=""
//                   id=""

//                 />
//               </span>
//               {i}
//             </h1>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import React, { useState } from "react";

export default function TransferList() {
  const [available, setAvailable] = useState([
    "AJINKYA",
    "RAHUL",
    "SHUBHAM",
    "AMIT",
    "SUMIT",
  ]);
  const [checkAvailable, setCheckAvailable] = useState([]);
  const [selected, setSelected] = useState([]);
  const [checkSelected, setCheckSelected] = useState([]);

  const handleChangeAvailable = (item) => {
    if (checkAvailable.includes(item)) {
      setCheckAvailable(checkAvailable.filter((i) => i !== item));
    } else {
      setCheckAvailable([...checkAvailable, item]);
    }
  };
  const handleChangeSelected = (item) => {
    if (checkSelected.includes(item)) {
      setCheckSelected(checkSelected.filter((i) => i !== item));
    } else {
      setCheckSelected([...checkSelected, item]);
    }
  };

  const moveRight = () => {
    setSelected([...selected, ...checkAvailable]);
    setAvailable(available.filter((item) => !checkAvailable.includes(item)));
    setCheckAvailable([])
  };

  const moveLeft = () => {
    setAvailable([...available, ...checkSelected]);
    setSelected(selected.filter((item) => !checkSelected.includes(item)));
    setCheckSelected([])
  };
  const moveLeftAll = () => {
    setAvailable([...selected]);
    // setSelected(selected.filter((item) => !checkSelected.includes(item)));
    setSelected([])
    setCheckAvailable([])
    
  };
  const moveRightAll = () => {
    setSelected([...selected]);
    // setSelected(selected.filter((item) => !checkSelected.includes(item)));
    setAvailable([])
    setCheckAvailable([])
    
  };

  return (
    <div className="flex flex-col h-screen mx-auto justify-center items-center">
      TransferList
      <div className="flex justify-evenly border-2 w-100 h-100">
        <div>
          <h1>AVAILABLE</h1>
          {available.map((item) => (
            <h1 key={item}>
              <input
                type="checkbox"
                name=""
                checked={checkAvailable.includes(item)}
                onChange={() => handleChangeAvailable(item)}
                id=""
              />
              {item}
            </h1>
          ))}
        </div>
        <div className="flex flex-col">
          <button onClick={moveRight}>
            <ArrowBigRight />
          </button>
          <button onClick={moveLeft}>
            <ArrowBigLeft />
          </button>
          <button onClick={moveLeftAll}>
            <ArrowLeft />
          </button>
          <button onClick={moveRightAll}>
            <ArrowRight />
          </button>
        </div>
        <div>
          <h1>SELECTED</h1>
          {selected.map((item) => (
            <h1 key={item}>
              <input
                type="checkbox"
                name=""
                checked={checkSelected.includes(item)}
                onChange={() => handleChangeSelected(item)}
                id=""
              />
              {item}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
