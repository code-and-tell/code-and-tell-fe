// Tests for About page component
// Core imports
import React from 'react';
import ReactDOM from 'react-dom';

// Utility imports
import { BrowserRouter } from 'react-router-dom';

// Component imports
import View from './View';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<BrowserRouter>
  		<View />
  	</BrowserRouter>,
  	div
  );
  ReactDOM.unmountComponentAtNode(div);
});