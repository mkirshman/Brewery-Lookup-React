import React, { useContext, useEffect } from 'react';
import { AppContext } from '../AppContext/AppContext';
import axios from 'axios';

export function fetchData(requestData, setSearchResults) {
  axios
    .get('/breweries', requestData)
    .then((response) => {
      const inputData = response.data;
      const breweryData = inputData['breweries']; // Access the 'breweries' key
      const outputData = breweryData.map(obj => Object.values(obj));
  
      setSearchResults(outputData);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

function ApiCall() {
  const { setSearchResults } = useContext(AppContext);

  useEffect(() => {
    fetchData({}, setSearchResults);
  }, [setSearchResults]);

  return null; // This component doesn't render anything; it's for making API calls
}

export default ApiCall;
