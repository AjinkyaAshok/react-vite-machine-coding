//
import React, { useState } from "react";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const list = [
    { id: 1, product: "Laptop", price: 100000, quantity: 1 },
    { id: 2, product: "Phone", price: 50000, quantity: 1 },
    { id: 3, product: "Television", price: 60000, quantity: 1 },
  ];

  const handleCart = (i) => {
    const existingItem = cart.find((product) => product.id === i.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === i.id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, i]);
    }
  };

  const handleIncrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const handleDecrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <div>
      ShoppingCart
      {list.map((item) => (
        <div className="flex gap-10">
          <h1>{item.product}</h1>
          <h1>{item.price}</h1>
          <button onClick={() => handleDecrease(item.id)}>-</button>
          <h1>{item.quantity}</h1>{" "}
          <button onClick={() => handleIncrease(item.id)}>+</button>
          <button onClick={() => handleCart(item)}>ADD TO CART</button>
        </div>
      ))}
      {cart.map((product) => (
        <div className="flex gap-10">
          <h1>{product.product}</h1>
          <h1>{product.price}</h1>
          <h1>{product.quantity}</h1>
          {/* <button onClick={() => handleCart(item)}>ADD TO CART</button> */}
        </div>
      ))}
      {cart.reduce((acc, item) => acc + item.quantity * item.price, 0)}
    </div>
  );
}
