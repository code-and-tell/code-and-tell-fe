// Scaffold - View component
// Core imports
import React, { useContext } from 'react';

// Component imports
// import { Link } from 'react-router-dom';

// Contexts / Services
import { AppContext } from 'contexts/AppContext/AppContext';

// Files / Assets
import './View.scss';

const View = (props) => {
  
  // Initialize dispatch actions
  const { dispatch } = useContext(AppContext);

  // Closes menu when the view is clicked
  const handleCloseMenu = () => {
    dispatch({ 
      type: "set-menu", 
      payload: { open: false }
    });
  };

  return (
    <div 
      className="View"
      onClick={(e) => handleCloseMenu()}
    >
      { props.children }
    </div>
  );
};

export default View;