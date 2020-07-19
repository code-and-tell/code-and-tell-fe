// Tests for App root
// Core imports
import React from 'react';
import ReactDOM from 'react-dom';

// Utility imports
import { BrowserRouter } from 'react-router-dom';

// Component imports
import { AppContextProvider } from './AppContext';

it('AppContextProvider and Consumer renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(
  	<BrowserRouter>
      <AppContextProvider />
  	</BrowserRouter>,
  	div
  );
  ReactDOM.unmountComponentAtNode(div);

});