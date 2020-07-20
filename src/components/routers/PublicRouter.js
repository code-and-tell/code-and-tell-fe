// Router - Public router for unauthenticated users
// Core imports
import React from 'react';

// Utility imports
import { Switch, Route } from 'react-router-dom';

// Component imports
import Home from 'components/views/Home/Home';
import Projects from 'components/views/Projects/Projects';
import Presentations from 'components/views/Presentations/Presentations';
import Tutorials from 'components/views/Tutorials/Tutorials';
import Community from 'components/views/Community/Community';
import Resources from 'components/views/Resources/Resources';
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
        exact path="/projects"
        component={Projects}
      />
      <Route
        exact path="/presentations"
        component={Presentations}
      />
      <Route
        exact path="/tutorials"
        component={Tutorials}
      />
      <Route
        exact path="/community"
        component={Community}
      />
      <Route
        exact path="/resources"
        component={Resources}
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
