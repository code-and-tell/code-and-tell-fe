// Router - Public router for unauthenticated users
// Core imports
import React from 'react';

// Utility imports
import { Switch, Route } from 'react-router-dom';

// Component imports
import Home from 'components/views/Home/Home';
import About from 'components/views/About/About';

const PublicRouter = () => {
  return (
    <Switch>
      <Route
        exact path="/"
        component={Home}
      />
      <Route
        exact path="/about"
        component={About}
      />
    </Switch>
  );
}

export default PublicRouter;
