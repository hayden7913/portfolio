import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

export default function Portfolio() {
  return (
    <div>
      <PortfolioItem
        alt="portfolio demo item"
        imgSrc="/images/laptop-pcb-flow.png"
        demoUrl="http://pcb-flow.herokuapp.com/"
        repoUrl="https://github.com/hayden7913/bread-pcb-tool"
        title="PCB Flow"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariaturd"
      />
      <PortfolioItem
        alt="portfolio demo item"
        imgSrc="/public/images/laptop-pomtracker.png"
        demoUrl="http://pcb-flow.herokuapp.com/"
        repoUrl="https://github.com/hayden7913/PomTracker-Capstone"
        title="Pomtracker"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariaturd"
      />
      <PortfolioItem
        alt="portfolio demo item"
        imgSrc="/images/laptop-anki-assistant.png"
        demoUrl="http://pcb-flow.herokuapp.com/"
        repoUrl="https://github.com/hayden7913/AnkiAssistant"
        title="AnkiAssistant"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariaturd"
      />
    </div>
  );
}
