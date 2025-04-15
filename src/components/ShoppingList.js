import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item"; // Assumes you have a separate Item component

function ShoppingList({ items }) {
  const [search, setSearch] = useState("");
  const [itemList, setItemList] = useState(items);

  const itemsToDisplay = itemList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleItemFormSubmit(newItem) {
    setItemList([...itemList, newItem]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter search={search} onSearchChange={setSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
