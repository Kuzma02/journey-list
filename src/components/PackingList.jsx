import { useState } from "react";
import { Item } from "./Item";

export const PackingList = ({ items, handleDeleteItem, handleToggleItem, clearAll }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if(sortBy === "input") sortedItems = items;
  if(sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.decription));
  if(sortBy === "packed") sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
            item={item}
          />
        ))}
      </ul>

      <div
        className="actions"
        onChange={(event) => setSortBy(event.target.value)}
      >
        <select value={sortBy}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearAll}>Clear list</button>
      </div>
    </div>
  );
};
