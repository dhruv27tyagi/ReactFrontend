import './App.css';
import Header from './components/Header';

import React from 'react';
import NewOperations from './components/NewOperations';
import InProgress from './components/NewOperations';




function App() {
  return (
  <>
  <Header title="Smarts Console"/>
  
  <NewOperations Header ="New Alerts"/>
  <InProgress Header = "In Progress Alerts"/>
  
  

  
  </>
  );
}

export default App;
