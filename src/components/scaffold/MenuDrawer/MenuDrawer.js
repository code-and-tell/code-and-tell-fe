// View - About page
// Core imports
import React from 'react';

// Component imports
import { Link } from 'react-router-dom';

// Files / Assets
import './MenuDrawer.scss';

const MenuDrawer = () => {
  return (
    <div className="MenuDrawer">
      <Link to="/">
        Home
      </Link>
      <Link to="/about">
        About
      </Link>
    </div>
  );
};

export default MenuDrawer;