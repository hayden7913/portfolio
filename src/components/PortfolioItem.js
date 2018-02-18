import React, { Component } from 'react';

import Portfolio from './Portfolio';
import Nav from './Nav';
import Routes from '../routes';

export default function PortfolioItem({ alt, linkUrl, imgSrc, title, description }) {
  return (
    <div className="row">
      <div className="portfolio-item">
        <div className="col6 col-screenshot">
          <a href={linkUrl}>
            <img src={imgSrc} alt={alt}/>
          </a>
        </div>
        <div className="col6">
          <a style={{ "textDecoration": "inherit", "color": "inherit" }} href={linkUrl}>
            <h1 className="portfolio-item-title">{title}</h1>
          </a>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
