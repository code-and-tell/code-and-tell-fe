// View - About page
// Core imports
import React, { useContext, useState, useRef, useEffect } from 'react';

// Component imports
import { Link } from 'react-router-dom';

// Contexts / Services
import { AppContext } from 'contexts/AppContext/AppContext';

// Files / Assets
import './MenuDrawer.scss';

const MenuDrawer = () => {
  // Initialize our state
  const { state, dispatch } = useContext(AppContext);

  // Setup our offset for the off-canvas menu
  // We use -9999 to ensure it is off screen on load
  const [offset, setOffset] = useState(-9999);
  
  // Grab a reference to the menu so we can set offset to its width
  const ref = useRef(null);

  // useEffect is very similar to componentDidMount // Ask if any questions on using it
  useEffect(() => {
    const menuWidth = ref.current.offsetWidth;
    const offset = state.menu.open
      ? 0
      : -menuWidth;
    setOffset(offset);
  }, [state.menu.open, dispatch]);

  return (
    <div 
      className={`
        MenuDrawer
        ${state.menu.open} ? 'active' : ''
      `}
      ref={ref}
      style={{ right: offset }}
    >
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