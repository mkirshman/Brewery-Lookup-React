import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext/AppContext';
import SearchTable from '../SearchTable/SearchTable'; // Import the SearchTable component
import { useAsyncDebounce } from 'react-table';
import './SearchForm.scss';

function SearchForm() {
  const { searchResults, setSearchResults } = useContext(AppContext);

  // Define state for form fields
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDistance, setSelectedDistance] = useState('');
  const [selectedIds, setSelectedIds] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [resultsPerPage, setResultsPerPage] = useState(10); // Default value
  const [sortDirection, setSortDirection] = useState('asc'); // Default value

  const handleSearch = () => {
    // Implement your search logic here and update searchResults in the context
    const results = [
      // Replace with your actual search results
    ];
    setSearchResults(results);
  };

  // Use a debounced function for search term input
  const debouncedSearch = useAsyncDebounce(handleSearch, 300);

  return (
    <div className="search-form">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Search:</label>
          <input
            type="text"
            className="search-input"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              debouncedSearch(); // Debounce search
            }}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            className="search-input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {/* Implement Google Place Autocomplete for location */}
        </div>
        <div>
  <label>Type:</label>
  <select
    className="search-input"
    value={selectedType}
    onChange={(e) => setSelectedType(e.target.value)}
  >
    <option value="">Select Type</option>
    {/* Add more options as needed */}
  </select>
</div>
<div>
  <label>Distance:</label>
  <input
    type="text"
    className="search-input"
    value={selectedDistance}
    onChange={(e) => setSelectedDistance(e.target.value)}
    placeholder="Enter Distance"
  />
</div>

        <div>
          <label>IDs:</label>
          <input
            type="text"
            className="search-input"
            value={selectedIds}
            onChange={(e) => setSelectedIds(e.target.value)}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            className="search-input"
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
          />
        </div>
        <div>
          <label>Results per page:</label>
          <select
    className="search-input"
    value={resultsPerPage}
    onChange={(e) => setResultsPerPage(e.target.value)}
  >
    <option value="50">50</option>
    <option value="100">100</option>
    <option value="150">150</option>
    <option value="200">200</option>
  </select>
        </div>
        <div>
          <label>Sort by:</label>
          <select
            className="search-input"
            value={sortDirection}
            onChange={(e) => setSortDirection(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div>
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </form>
      {searchResults.length > 0 && (
        <div className="results-table">
          <SearchTable data={searchResults} />
        </div>
      )}
    </div>
  );
  
}

export default SearchForm;
