import React, { Component } from 'react';
export default function Portfolio() {
  return (
    <div>
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
