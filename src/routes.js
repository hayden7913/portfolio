import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Hello from './components/Hello';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/hello" component={Hello}/>
    </Switch>
  </div>
);
