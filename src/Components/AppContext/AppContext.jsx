import React, { createContext, useState, useContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]); // Ensure this is set correctly

  const initialContext = {
    searchTerm: '',
    setSearchTerm: '',
    searchResults: [],
    setSearchResults: [],
  };

  return (
    <AppContext.Provider value={initialContext}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
