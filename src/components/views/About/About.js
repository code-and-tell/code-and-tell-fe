// View - About page
// Core imports
import React from 'react';

// Component imports
import { Link } from 'react-router-dom';

// Files / Assets
import './About.scss';

const About = () => {
  return (
    <div className="Home">
      About works!
      <Link to="/">
        Home
      </Link>
    </div>
  );
};

export default About;