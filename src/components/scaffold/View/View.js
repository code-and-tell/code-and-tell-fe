// Scaffold - View component
// Core imports
import React from 'react';

// Component imports
// import { Link } from 'react-router-dom';

// Files / Assets
import './View.scss';

const View = (props) => {
  
  return (
    <div className="View">

      { props.children }

    </div>
  );
};

export default View;