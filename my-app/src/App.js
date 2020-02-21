import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from  './Component/Header/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header></Header>
      </header>
      
    </div>
  );
}

export default App;
