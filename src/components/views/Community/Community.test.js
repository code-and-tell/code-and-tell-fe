// Tests for Community page component
// Core imports
import React from 'react';
import ReactDOM from 'react-dom';

// Utility imports
import { BrowserRouter } from 'react-router-dom';

// Component imports
import Community from './Community';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<BrowserRouter>
  		<Community />
  	</BrowserRouter>,
  	div
  );
  ReactDOM.unmountComponentAtNode(div);
});