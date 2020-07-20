// View - About page
// Core imports
import React, { useContext, useState, useRef, useEffect } from 'react';

// Component imports
import { NavLink } from 'react-router-dom';

// Contexts / Services
import { AppContext } from 'contexts/AppContext/AppContext';

// Files / Assets
import './MenuDrawer.scss';

const MenuDrawer = () => {

  // Initialize our state and dispatch
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
      : -(menuWidth);
    setOffset(offset);
  }, [state.menu.open, offset]);

  // Closes menu when a link is clicked
  const handleCloseMenu = () => {
    dispatch({ 
      type: "set-menu", 
      payload: { open: false }
    });
  };

  // Render menu links based on context
  const renderMenuLinks = () => {
    const links = state.menu.links.map(link => {
      return (
        <NavLink 
          exact={true}
          activeClassName='active'
          to={link.route}
          onClick={(e) => handleCloseMenu()}
          key={`link-${link.route}`}
        >
          {link.name}
        </NavLink>
      )
    });
    return links;
  };

  return (
    <div 
      className={`
        MenuDrawer
        ${state.menu.open
          ? "active" 
          : ""
        }
      `}
      ref={ref}
      style={{ right: offset }}
    >
      {renderMenuLinks()}
    </div>
  );
};

export default MenuDrawer;