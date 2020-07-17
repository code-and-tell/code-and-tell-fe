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

      <Link 
        to="/"
        className="Logo"
      >
        <h1>
          { title }
        </h1>
      </Link>

      {/* Will convert to component due to deeper business logic later */}
      <div className="MenuIcon">
        <FontAwesomeIcon icon={faBars} />
      </div>

    </div>
  );
};

export default Header;