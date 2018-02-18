import React, { Component } from 'react';

export default function About() {
  return (
    <section className="about-section">
      <h1 className="about-heading">
        Web developer from Oakland, CA bringing ideas to life on the web.
      </h1>
      <p className="about-paragraph">
        Here I will write a few more senetences about myself. Hopefully something about how I'd like to find a way
        to use web software to do something meaningful, make the world a better place, reduce suffering etcetera. Here's one more
        sentence to test how much content I can write and still maintain aesthetics.
      </p>
      <span className="about-email-link-wrapper">
        <span className="about-email-link-context"></span>
        <a className="about-email-link" href=""></a>
      </span>
    </section>
  );
}
