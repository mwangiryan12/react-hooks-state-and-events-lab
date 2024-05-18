import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory,setSelectedCategory] = useState("")

  
  function handleChange(event){
    setSelectedCategory(event.target.value)
    
  }
  const filteredList = items.filter(item=>item.category===selectedCategory)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.length<1?
          items.map((item) => (
            <Item key={item.id} id={item.id} name={item.name} category={item.category}/>
        ))
        :
          filteredList.map((item) => (
            <Item key={item.id} id={item.id} name={item.name} category={item.category}/>
        ))
        
        }
      </ul>
    </div>
  );
}

export default ShoppingList;
