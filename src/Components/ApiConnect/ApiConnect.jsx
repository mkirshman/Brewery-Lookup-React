import React, { useContext } from 'react';
import { AppContext } from '../AppContext/AppContext';
import axios from 'axios';

export function fetchData(requestData, setSearchResults) {
    axios.get('/breweries', requestData)
    .then((response) => {
        const inputData = response.data
        const outputData = inputData.map( Object.values );
      console.log('Fetched data:', outputData); // Add this line for debugging
      setSearchResults(outputData);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

function ApiCall() {
  const { setSearchResults } = useContext(AppContext);

  return null; // This component doesn't render anything; it's for making API calls
}

export default ApiCall;