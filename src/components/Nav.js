import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';

export default function Nav({ areLinksHidden, onMenuClick }) {
  const navClass = classNames('nav', {
    'is-active': !areLinksHidden
  });

  const menuIconClass = classNames('nav-menu-icon', {
    'icon-menu-2': areLinksHidden,
    'icon-close-1': !areLinksHidden,
  });

  return (
    <nav className={navClass}>
      <div className="container">
        <div className="nav-left">
          <span className="nav-name">Hayden HarkWright</span>
          <span className={menuIconClass} onClick={onMenuClick}></span>
        </div>
        <div className="nav-right">
          <Link to="/" className="nav-menu-item">About</Link>
          <Link to="/portfolio" className="nav-menu-item">Portfolio</Link>
          <Link to="/contact" className="nav-menu-item">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
