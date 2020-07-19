// Router - Public router for unauthenticated users
// Core imports
import React from 'react';

// Utility imports
import { Switch, Route } from 'react-router-dom';

// Component imports
import Home from 'components/views/Home/Home';
import About from 'components/views/About/About';
import Playground from 'components/views/Playground/Playground';

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
      <Route
        exact path="/playground"
        component={Playground}
      />
    </Switch>
  );
}

export default PublicRouter;
