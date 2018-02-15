import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Portfolio from './components/Portfolio';
import Hello from './components/Hello';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={Portfolio}/>
      <Route exact path="/hello" component={Hello}/>
    </Switch>
  </div>
);
