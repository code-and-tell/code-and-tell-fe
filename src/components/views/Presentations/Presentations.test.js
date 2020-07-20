// Tests for Presentations page component
// Core imports
import React from 'react';
import ReactDOM from 'react-dom';

// Utility imports
import { BrowserRouter } from 'react-router-dom';

// Component imports
import Presentations from './Presentations';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<BrowserRouter>
  		<Presentations />
  	</BrowserRouter>,
  	div
  );
  ReactDOM.unmountComponentAtNode(div);
});