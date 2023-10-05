import Dashboard from './Components/Dashboard/Dashboard';
import { AppProvider } from './Components/AppContext/AppContext';
import './App.css';

function App() {
  return (
    <div className="App">

      <AppProvider>
      <Dashboard/>
      </AppProvider>
    </div>
  );
}

export default App;
