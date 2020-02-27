import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';



function App() {
  return (
    <div className="App">
        <Header/>
        <Sidebar/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
