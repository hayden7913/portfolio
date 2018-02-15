import React, { Component } from 'react';

import Portfolio from './Portfolio';
import Nav from './Nav';
import Routes from '../routes';

export default function LandingPage() {
  return (
    <div>
      <Nav />
      <div className="container">
          {Routes}
      </div>
    </div>
  );
}
