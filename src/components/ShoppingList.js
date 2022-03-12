import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleOnSearchChange(e) {
    setSearch(e.target.value)
  }
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const newItemsToDisplay = itemsToDisplay.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit={onItemFormSubmit}
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleOnSearchChange}
        search={search}
      />
      <ul className="Items">
        {newItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;