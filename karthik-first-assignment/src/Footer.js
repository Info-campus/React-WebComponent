import React from 'react';
import './Footer.css'
const Footer = () => {

  return (
    <footer className="footer text-white">
      <blockquote className="blockquote text-center">
        <p className="mb-0">This is the Footer Component</p>
        <footer className="blockquote-footer text-dark">
          Developed at Info-Karthik <cite title="by Karthik">©</cite>
        </footer>
      </blockquote>
    </footer>
  );
}

export default Footer;