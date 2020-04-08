import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { faGithubSquare, faSlack } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contribute = () => {
  return (
    <section id="contribute">
      <div>
        <h2>Contribute to Nautilus</h2>
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
      </div>
      <div id="line"></div>
      <div>
        <h2>Join Us on Slack</h2>
        <figure>
          <ScrollAnimation animateIn="slideInRight">
            <figcaption>
              <a
                href="https://join.slack.com/t/nautiluscommunity/shared_invite/zt-deax51kl-PiLLyBiEc0gVFKM_XrwNKQ"
                target="Blank"
                alt="Nautilus Slack page"
              >
                <FontAwesomeIcon
                  icon={faSlack}
                  size="8x"
                  color="#2274a5"
                  className="github-icon"
                />
              </a>
            </figcaption>
          </ScrollAnimation>
        </figure>
      </div>
    </section>
  );
};

export default Contribute;
