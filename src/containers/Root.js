import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, BrowserRouter  } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Routes from '../routes';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
          { Routes }
      </BrowserRouter>
    );
  }
}
