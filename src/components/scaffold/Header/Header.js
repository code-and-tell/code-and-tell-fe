// Scaffold - Header component
// Core imports
import React, { useContext } from 'react';

// Utility imports
// import { title } from 'config.js';

// Component imports
import { Link } from 'react-router-dom';

// Contexts / Services
import { AppContext } from 'contexts/AppContext/AppContext';

// Files / Assets
import './Header.scss';
import Logo from 'assets/images/logo-temp.png';

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  
  // Initialize our state
  const { dispatch } = useContext(AppContext);

  const headerText = <h1>Code<span className="amp">&&</span>Tell</h1>;

  return (
    <div className="Header">

      <Link 
        to="/"
        className="Logo"
      >
        <img src={ Logo } alt="logo" />
        { headerText }
      </Link>

      {/* Will convert to component due to deeper business logic later */}
      <div 
        className="MenuIcon"
        onClick={(e) => dispatch({
          type: "toggle-menu"
        })}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

    </div>
  );
};

export default Header;