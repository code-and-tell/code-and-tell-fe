// Tests for Tutorials page component
// Core imports
import React from 'react';
import ReactDOM from 'react-dom';

// Utility imports
import { BrowserRouter } from 'react-router-dom';

// Component imports
import Tutorials from './Tutorials';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<BrowserRouter>
  		<Tutorials />
  	</BrowserRouter>,
  	div
  );
  ReactDOM.unmountComponentAtNode(div);
});