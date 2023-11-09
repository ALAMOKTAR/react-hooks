import React from "react";

const Filter = ({ handleTitleChange, handleRateChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search par title"
        onChange={handleTitleChange}
      />
      <input placeholder="search par rate"
        onChange={handleRateChange}
      />
    </div>
  );
};

export default Filter;