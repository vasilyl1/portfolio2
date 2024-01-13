import React from 'react';
// importing CSS file as a dependency
//import '../styles/Style.css';

//function Footer({ currentPage, handlePageChange }) {
    function Footer() {
  return (
    <ul className="nav footer nav-tabs">
      <li className="nav-item">
        <a
          href="https://github.com/vasilyl1"
          className='nav-link'
        >
          GitHub
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://www.linkedin.com/in/vlikhovaido/"
          className='nav-link'
        >
          LinkedIn
        </a>
      </li>
      <li className="nav-item">
        <a
          href="contact"
          className='nav-link'
        >
          likhovaido@gmail.com
        </a>
      </li>
      <li className="nav-item">
        <a
          href="contact"
          className='nav-link'
        >
          705.300.0993
        </a>
      </li>
      </ul>
  );
}

export default Footer;