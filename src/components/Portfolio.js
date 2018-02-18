import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

//export default function PortfolioItem({ alt, linkUrl, imgSrc, title, description }) {
export default function Portfolio() {
  return (
    <div className="container">
      <PortfolioItem
        alt="portfolio demo item"
        imgSrc="/public/images/laptop-pcb-flow.png"
        linkUrl="http://pcb-flow.herokuapp.com/"
        title="PCB Flow"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <PortfolioItem
        alt="portfolio demo item"
        imgSrc="/public/images/laptop-pcb-flow.png"
        linkUrl="http://pcb-flow.herokuapp.com/"
        title="Pomtracker"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <PortfolioItem
        alt="portfolio demo item"
        imgSrc="/public/images/laptop-pcb-flow.png"
        linkUrl="http://pcb-flow.herokuapp.com/"
        title="AnkiAssistant"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>
  )
  return (
    <div className="portfolio-app-screenshot-container">
      <a className="portfolio-app-link" href="http://pcb-flow.herokuapp.com/">
        <img className="portfolio-app-screenshot" src="/public/images/pcb-flow-screenshot.png" alt=""/>
      </a>
      <a className="portfolio-app-link" href="https://capstone-pomtracker.herokuapp.com/">
        <img className="portfolio-app-screenshot" src="/public/images/pomtracker-screenshot.png" alt=""/>
      </a>
      <a className="portfolio-app-link" href="https://anki-assistant.herokuapp.com/">
        <img className="portfolio-app-screenshot" src="/public/images/app-screenshot-full.png" alt=""/>
      </a>
    </div>
  );
}
