import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">patrick quayle</Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
          <ul className="navbar-nav">      
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" onClick={toggleMenu}>Expertise</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={toggleMenu}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
