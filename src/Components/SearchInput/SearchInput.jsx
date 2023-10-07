import React, { useContext } from 'react';
import { AppContext } from '../AppContext/AppContext';
import SearchForm from '../SearchForm/SearchForm';

function SearchInput() {
  const { searchTerm, setSearchTerm } = useContext(AppContext);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div>
        <SearchForm />
      </div>
    </div>
  );
}

export default SearchInput;
