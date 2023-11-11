import React from "react";

const Filter = ({ handleTitleChange, handleRateChange }) => {
  return (
    <div>
      {/* title filtre input avec envoie du variable a la fonction pour le filter*/}
      <input
        type="text"
        placeholder="search par title"
        onChange={handleTitleChange}
      />
     
      {/* rate filtre input avec envoie du variable a la fonction pour le filter */}
      <input placeholder="search par rate"
        onChange={handleRateChange}
      />
    </div>
  );
};

export default Filter;