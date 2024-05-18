import React, { useState } from "react";

function Item({ name, category}) {
  const [addToCart,setAddToCart] = useState(false)
  function handleClick(){
    setAddToCart(addToCart => !addToCart)
  }
  return (
    <li className={addToCart?"in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{addToCart? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}
export default Item;