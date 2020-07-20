// Scaffold - Header component
// Core imports
import React, { useContext } from 'react';

// Component imports
import { Link } from 'react-router-dom';

// Contexts / Services
import { AppContext } from 'contexts/AppContext/AppContext';

// Files / Assets
import './Header.scss';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  
  // Hardcoded title for now. Will move these details to another area eventually
  const title = "Code && Tell";

  // Initialize our state
  const { state, dispatch } = useContext(AppContext);

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