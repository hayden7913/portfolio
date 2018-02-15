import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, HashRouter  } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import LandingPage from '../components/LandingPage';

export default class Root extends Component {
  render() {
    return (
      <HashRouter>
          <LandingPage />
      </HashRouter>
    );
  }
}
