import React from 'react';

function Filter({ onFilterChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => onFilterChange(e.target.value, 'title')}
      />
      <input
        type="number"
        placeholder="search by rating"
        onChange={(e) => onFilterChange(e.target.value, 'rating')}
      />
    </div>
  );
}

export default Filter;