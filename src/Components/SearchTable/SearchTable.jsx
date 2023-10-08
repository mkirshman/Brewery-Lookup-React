import React, { useContext } from 'react';
import { AppContext } from '../AppContext/AppContext';

function SearchTable() {
  const { searchResults } = useContext(AppContext);

//   Ensure that searchResults is an array of objects
  if (!Array.isArray(searchResults) || searchResults.length === 0) {
    return null; // Render nothing if searchResults is not an array or is empty
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>State</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Brewery Type</th>
          <th>Postal Code</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {searchResults.map((brewery, index) => (
          <tr key={index}>
            <td>{brewery[0]}</td>
            <td>{brewery[1]}</td>
            <td>{brewery[2]}</td>
            <td>{brewery[3]}</td>
            <td>{brewery[4]}</td>
            <td>{brewery[5]}</td>
            <td>{brewery[6]}</td>
            <td>
              {brewery[7] !== 'N/A' ? (
                <a href={brewery[7]} target="_blank" rel="noopener noreferrer">
                  {brewery[7]}
                </a>
              ) : (
                'N/A'
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchTable;
