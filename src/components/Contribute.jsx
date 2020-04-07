import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contribute = () => {
  return (
    <section id="contribute">
      <a href="" id="contribute">
        <h1>Contribute to Nautilus</h1>
      </a>
      <h3>An open source project on Github</h3>
      <figure>
        <ScrollAnimation animateIn="slideInLeft">
          <figcaption>
            <a
              href="https://github.com/oslabs-beta/nautilus"
              target="Blank"
              alt="Nautilus GitHub page"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="8x"
                color="#2274a5"
                className="github-icon"
              />
            </a>
          </figcaption>
        </ScrollAnimation>
      </figure>
    </section>
  );
};

export default Contribute;
