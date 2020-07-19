// Tests for Header scaffold component
// Core imports
import React from 'react';
import ReactDOM from 'react-dom';

// Utility imports
import { BrowserRouter } from 'react-router-dom';

// Contexts / Services
import { AppContextProvider } from 'contexts/AppContext/AppContext';

// Component imports
import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<BrowserRouter>
      <AppContextProvider>
        <Header />
      </AppContextProvider>
  	</BrowserRouter>,
  	div
  );
  ReactDOM.unmountComponentAtNode(div);
});