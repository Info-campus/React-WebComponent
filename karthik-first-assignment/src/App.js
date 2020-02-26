import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Sidenav from './Sidenav';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="row">
        <div className="col-md-3">
          <Sidenav></Sidenav>
        </div>
        <div className="col-md-9">
          <Main></Main>
        </div>
      </div>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
