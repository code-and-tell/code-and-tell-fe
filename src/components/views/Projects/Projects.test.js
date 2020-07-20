// Tests for Projects page component
// Core imports
import React from 'react';
import ReactDOM from 'react-dom';

// Utility imports
import { BrowserRouter } from 'react-router-dom';

// Component imports
import Projects from './Projects';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<BrowserRouter>
  		<Projects />
  	</BrowserRouter>,
  	div
  );
  ReactDOM.unmountComponentAtNode(div);
});