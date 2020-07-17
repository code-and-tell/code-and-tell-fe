// View - Home page
// Core imports
import React from 'react';

// Component imports
import { Link } from 'react-router-dom';

// Files / Assets
import './Home.scss';

const Home = () => {
  return (
    <div className="Home">
      Home works!
      <Link to="/about">
        About
      </Link>
    </div>
  );
};

export default Home;