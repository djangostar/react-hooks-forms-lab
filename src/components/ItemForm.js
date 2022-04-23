import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  const handleSubmit = (e) => {
    e.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory
    })
  }

  const handleItemNameSubmit = (e) => setItemName(e.target.value)

  const handleCategorySubmit = (e) => setItemCategory(e.target.value)

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name"
          onChange={handleItemNameSubmit}
          value={itemName}
        />
      </label>

      <label>
        Category:
        <select 
          name="category"
          onChange={handleCategorySubmit}
          value={itemCategory}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;