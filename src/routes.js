import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Hello from './components/Hello';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={About}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
  </div>
);
