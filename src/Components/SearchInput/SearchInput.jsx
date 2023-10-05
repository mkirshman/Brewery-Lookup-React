import React, { useContext } from 'react';
import { AppContext } from '../AppContext/AppContext';

function SearchInput() {
  const { searchTerm, setSearchTerm } = useContext(AppContext);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your search query"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchInput;
