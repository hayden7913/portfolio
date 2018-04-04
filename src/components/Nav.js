import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';

export default function Nav({ areLinksHidden, currentRoute, onMenuClick }) {
  const navClass = classNames('nav', {
    'is-active': !areLinksHidden
  });

  const menuIconClass = classNames('nav-menu-icon', {
    'icon-menu': areLinksHidden,
    'icon-close': !areLinksHidden,
  });

  const aboutLinkClass = classNames('nav-menu-item', {
    'is-active': currentRoute === '/',
  });

  const portfolioLinkClass = classNames('nav-menu-item', {
    'is-active': currentRoute === '/portfolio',
  });

  const contactLinkClass = classNames('nav-menu-item', {
    'is-active': currentRoute === '/contact',
  });

  return (
    <nav className={navClass}>
      <div className="nav-container">
        <div className="nav-left">
          <span className="nav-name">Hayden HarkWright</span>
          <span className={menuIconClass} onClick={onMenuClick}></span>
        </div>
        <div className="nav-right">
          <Link to="/" className={aboutLinkClass}>About</Link>
          <Link to="/portfolio" className={portfolioLinkClass}>Portfolio</Link>
          <Link to="/contact" className={contactLinkClass}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
