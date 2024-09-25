import React from 'react';

//creating the navbar component
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Adenutsi!</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
