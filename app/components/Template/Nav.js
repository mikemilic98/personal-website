import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src='https://drive.google.com/uc?export=view&id=1_DgSe0JmsL_Hxd6aaEOy-cO0aZgPreDe' alt="" />
      </Link>
      <header>
        <h2>Dhruv Mahajan</h2>
        <p><a href="mailto:dhruv1754@gmail.com">dhruv1754@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I am a 4th Year <a href="https://ubc.ca/">UBC ECE</a> student and a part-time software consultant. I design data and security applications.
            I have 2 years hands on experience of data analytics and web app development. My upcomming job profile is in the field of cloud development and security. 
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
      <p className="copyright">&copy; Dhruv Mahajan <Link to="/">dhruv-mahajan.ca</Link>.</p>
    </section>
  </section>
);

export default Nav;
