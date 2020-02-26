import React from 'react';
import './Main.css';
import logo from './logo.svg';

const Main = () => {

  return (
    <div className="jumbotron text-center bg-dark text-white">
      <h1 className="display-4">Main Component</h1>
      <p className="lead">This is a simple site created by using React JS.</p>
      <hr className="my-4" />
      <p>It uses Functions for Components instead of Classes</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="learn">Learn React</a>
      </p>

      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default Main;