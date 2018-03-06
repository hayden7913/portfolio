import React, { Component } from 'react';

import Portfolio from './Portfolio';
import Nav from './Nav';
import Routes from '../routes';

export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      areLinksHidden: true,
    }
  }

  toggleNavLinks = () => {
    const { areLinksHidden } = this.state;
    this.setState({ areLinksHidden: !areLinksHidden});
  }

  render() {
    return (
      <div>
        <Nav onMenuClick={this.toggleNavLinks} />
        <div className="container">
          {Routes}
        </div>
      </div>
    );
  }
}
