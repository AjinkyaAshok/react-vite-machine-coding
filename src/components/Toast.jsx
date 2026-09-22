// import React, { useEffect, useState } from "react";

// export default function Toast({ message, type, duration }) {
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShow(false);
//     }, duration);
//     return () => clearTimeout(timer);
//   }, [type]);
//   const list = {
//     error: "bg-red-200",
//     success: "bg-green-200",
//     warning: "bg-yellow-200",
//     info: "bg-white",
//   };

//   const handleClick = (e) => {
//     if (e.target === e.currentTarget) {
//       setShow(false);
//     }
//   };
//   return (
//     <div
//       onClick={(e) => handleClick(e)}
//       className="flex h-screen mx-auto justify-center items-center"
//     >
//       Toast
//       {show && (
//         <div
//           className={`${list[type]} justify-center flex items-center text-center  border-2 bg-red w-50 h-50`}
//         >
//           <h1>{message}</h1>
//           <button onClick={() => setShow(!show)}>X</button>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function Toast({ message, duration, type }) {
  const [active, setActive] = useState(true);
  const [visibleList,setVisibleList] =useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const list = {
    like: "bg-green-200",
    error: "bg-red-200",
  };

  const notifications = [
    {
      id: 1,
      user: "Rahul",
      message: "liked your post",
      type: "like",
      time: "2 min ago",
      read: false,
    },
    {
      id: 2,
      user: "Priya",
      message: "commented on your post",
      type: "comment",
      time: "10 min ago",
      read: false,
    },
    {
      id: 3,
      user: "Amit",
      message: "started following you",
      type: "follow",
      time: "1 hour ago",
      read: true,
    },
  ];



  const handleClick = (id) => {
    setVisibleList([...notifications, notifications.filter((item) => item.id !== id)])
  };
  return (
    <div
      className="flex mx-auto h-screen justify-center items-center"
    >
      Toast
      {active &&
        notifications.map((noti) => (
          <div
            
            className={`${list[type]} h-40 w-40 border-2`}
          >
            <h1>{noti.user}</h1>
            <h1>{noti.message}</h1>
            <h1>{noti.read}</h1>
            <button onClick={() => handleClick(noti.id)}>X</button>
          </div>
        ))}
 
    </div>
  );
}
