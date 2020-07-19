// Tests for MenuDrawer scaffold component
// Core imports
import React from 'react';
import ReactDOM from 'react-dom';

// Utility imports
import { BrowserRouter } from 'react-router-dom';

// Contexts / Services
import { AppContextProvider } from 'contexts/AppContext/AppContext';

// Component imports
import MenuDrawer from './MenuDrawer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppContextProvider>
      <BrowserRouter>
        <MenuDrawer />
      </BrowserRouter>
    </AppContextProvider>,
  	div
  );
  ReactDOM.unmountComponentAtNode(div);
});