import React from "react";


/* Deliverables
    when user types in the input field, the list of items should be
    filtered so that only items with names that match the text are
    included

    determine when to add state for this feature
    what components need to know about the search text?

    Once the component which should hold the state for this feature;
     set initial state, connect that state to the input field
     remember, CONTROLLED input; the input value should always be in
     sync with state

    Find a way to set state when the input changes
     use of a prop called; onSearchChange as a callback

    After making those changes, use that state value to determine 
    which items are being displayed on the page, similar to how 
    category dropdown works
*/

  function Filter({ onCategoryChange, onSearchChange, search }) {
    return (
      <div className="Filter">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={onSearchChange}
          value={search}
        />
        <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    );
  }
  
  export default Filter;