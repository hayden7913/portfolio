import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Portfolio from './Portfolio';
import Nav from './Nav';
import Routes from '../routes';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const renderTechIcons = techIcons => (
  techIcons.map(iconClassName => (
    <span
      className={`portfolio-tech-icon tech-icon-${iconClassName} tooltip`}
      data-tooltip={capitalize(iconClassName)}
    >
    </span>)
  )
);

export default function PortfolioItem({
  alt,
  demoUrl,
  imgSrc,
  repoUrl,
  title,
  description,
  techIcons,
}) {

  return (
    <div className="row portfolio-row">
      <div className="portfolio-item">
        <div className="col6 col-screenshot">
          <a href={demoUrl}>
            <img className="portfolio-screenshot" src={imgSrc} alt={alt}/>
          </a>
        </div>
        <div className="col6 col-description">
          <a href={demoUrl}>
            <h1 className="portfolio-title">{title}</h1>
          </a>
          <p className="portfolio-description">{description}</p>
          <div className="portfolio-tech-icons">
            {renderTechIcons(techIcons)}
          </div>
          <a className="portfolio-link" href={repoUrl}>Repo</a>
          <span> | </span>
          <a className="portfolio-link" href={demoUrl}>Demo</a>
        </div>
      </div>
    </div>
  );
}
