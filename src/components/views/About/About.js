// View - About page
// Core imports
import React from 'react';

// Component imports
import { Link } from 'react-router-dom';

// Files / Assets
import './About.scss';

const About = () => {
  return (
    <div className="About">
      <Link to="/">
        Home
      </Link>
      <h1>
        I'm the about page!
      </h1>
    </div>
  );
};

export default About;