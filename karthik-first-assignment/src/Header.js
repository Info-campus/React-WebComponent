import React from 'react';
import './Header.css';

const Header = () => {

  return (

    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="Info">Info-Karthik <span role="img">😎</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Front">Front End Course</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Back">Back End Course</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Full">Full Stack Course</a>
            </li>
          </ul>
        </div>
      </nav>


    </header>



  );
}

export default Header;