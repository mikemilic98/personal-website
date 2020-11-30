import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src='/images/me.png' alt="" />
      </Link>
      <header>
        <h2>Michael Milic</h2>
        <p><a href="mailto:mikemilic98@gmail.com">mikemilic98@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I am a Software Developer and DevOps Engineer in my 5th year of school at UBC in the department of Electrical and Computer Engineering 
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  </section>
);

export default Nav;
