// import React, { useState } from "react";

// export default function ShoppingCart() {
//   const [cart, setCart] = useState([]);
//   const data = [
//     { id: 1, name: "Laptop", price: 50000, quantity: 1 },
//     { id: 2, name: "Phone", price: 25000, quantity: 1 },
//     { id: 3, name: "Headphones", price: 5000, quantity: 1 },
//   ];

//   const handleClick = (item) => {
//     const existingItem = cart.find((product) => product.id === item.id);

//     if (existingItem) {
//       setCart(
//         cart.map((product) =>
//           product.id === item.id
//             ? { ...product, quantity: product.quantity + 1 }
//             : product,
//         ),
//       );
//     } else {
//       setCart([...cart, item]);
//     }
//   };

//   const handleIncrease = (id) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
//       ),
//     );
//   };
//   const handleDecrease = (id) => {
//     setCart(
//       cart
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
//         )
//         .filter((item) => item.quantity > 0),
//     );
//   };
//   const handleRemove = (item) => {
//     setCart(cart.filter((i) => i.id !== item.id));
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       ShoppingCart
//       {data.map((item) => (
//         <div key={item.id} className="flex h-10 gap-2 ">
//           <h1>{item.name}</h1>
//           <h1>{item.price}</h1>
//           <h1>{item.quantity}</h1>
//           <button onClick={() => handleClick(item)}>ADD TO CART</button>
//         </div>
//       ))}
//       {cart.map((item) => (
//         <div key={item.id}>
//           <h1>{item.name}</h1>
//           <h1>{item.price}</h1>
//           <button onClick={() => handleDecrease(item.id)}>[-]</button>
//           <h1>{item.quantity}</h1>
//           <button onClick={() => handleRemove(item)}>Remove</button>
//           <button onClick={() => handleIncrease(item.id)}>[+]</button>
//         </div>
//       ))}
//       total: {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
//     </div>
//   );
// }
import React, { useState } from "react";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const data = [
    { id: 1, name: "Laptop", price: 50000, quantity: 1 },
    { id: 2, name: "Phone", price: 25000, quantity: 1 },
    { id: 3, name: "Headphones", price: 5000, quantity: 1 },
  ];

  const handleCart = (item) => {
    const itemExist = cart.find((i) => i.id === item.id);

    if (itemExist) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      );
    } else {
      setCart([...cart, item]);
    }
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleIncrease = (item) => {
    setCart(
      cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    );
  };
  const handleDecrease = (item) => {
    setCart(
      cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i,
      ).filter((item) => item.quantity > 0),
    );
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center mx-auto">
      ShoppingCart
      {data.map((item) => (
        <div className="flex">
          <h1>{item.name}</h1>
          <h1>{item.price}</h1>
          <button
            onClick={() => handleDecrease(item)}
            className="bg-amber-100 p-2"
          >
            -
          </button>{" "}
          <button
            onClick={() => handleIncrease(item)}
            className="bg-amber-100 p-2"
          >
            +
          </button>
          <button onClick={() => handleCart(item)}>ADD TO CART</button>
        </div>
      ))}
      {cart.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <h1>{item.price}</h1>
          <h1>{item.quantity}</h1>
          <button onClick={() => handleRemove(item.id)}>REMOVE</button>
        </div>
      ))}
      {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
    </div>
  );
}
