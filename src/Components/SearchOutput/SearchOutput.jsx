import React, { useContext } from 'react';
import { AppContext } from '../AppContext/AppContext';

function SearchOutput() {
  const { searchResults } = useContext(AppContext);

  return (
    <div>
      <h2>Search Results:</h2>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchOutput;
