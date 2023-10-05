import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SearchOutput from '../SearchOutput/SearchOutput';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hello from the Dashboard</p>
      <SearchInput />
      <SearchOutput />
    </div>
  );
}

export default Dashboard;