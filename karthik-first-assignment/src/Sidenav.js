import React from 'react';
import './Sidenav.css';

const Sidenav = () => {

  return (
    <nav className="sidebar">

      <div className="list-group">
        <a href="html" className="list-group-item list-group-item-action list-group-item-primary">HTML 5</a>
        <a href="css" className="list-group-item list-group-item-action list-group-item-secondary">CSS 3</a>
        <a href="bs" className="list-group-item list-group-item-action list-group-item-success">Bootstrap 4</a>
        <a href="js" className="list-group-item list-group-item-action list-group-item-danger">JavaScript ES6</a>
        <a href="react" className="list-group-item list-group-item-action list-group-item-warning">React JS</a>
        <a href="mongo" className="list-group-item list-group-item-action list-group-item-info">Mongo DB</a>
        <a href="express" className="list-group-item list-group-item-action list-group-item-light">Express JS</a>
        <a href="node" className="list-group-item list-group-item-action list-group-item-dark">Node JS</a>
      </div>

    </nav>
  );
}

export default Sidenav;