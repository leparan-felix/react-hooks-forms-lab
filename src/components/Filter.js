import React from "react";

function Filter({ search, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default Filter;
