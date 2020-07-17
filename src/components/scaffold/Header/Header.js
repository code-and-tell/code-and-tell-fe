// Scaffold - Header component
// Core imports
import React from 'react';

// Component imports
import { Link } from 'react-router-dom';

// Files / Assets
import './Header.scss';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  
  const title = "Code && Tell";

  return (
    <div className="Header">
      
      <div className="Logo">
        <h1>
          { title }
        </h1>
      </div>

      <div className="MenuIcon">
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className="MenuDrawer">
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
      </div>

    </div>
  );
};

export default Header;