import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Portfolio from './Portfolio';
import Nav from './Nav';
import Routes from '../routes';

export default function PortfolioItem({ alt, demoUrl,  imgSrc, repoUrl, title, description, }) {
  return (
    <div className="row portfolio-row">
      <div className="portfolio-item">
        <div className="col6 col-screenshot">
          <a href={demoUrl}>
            <img src={imgSrc} alt={alt}/>
          </a>
        </div>
        <div className="col6">
          <a href={demoUrl}>
            <h1 className="portfolio-item-title">{title}</h1>
          </a>
          <p>{description}</p>
          <div className="portfolio-tech-icons">
            <span className="icon-react"> </span>
            <span className="icon-nodejs"> </span>
            <span className="icon-mongodb"> </span>
          </div>
          <Link className="portfolio-link" to={repoUrl}>Repo</Link>
          <span> | </span>
          <Link className="portfolio-link" to={demoUrl}>Demo</Link>
        </div>
      </div>
    </div>
  );
}
