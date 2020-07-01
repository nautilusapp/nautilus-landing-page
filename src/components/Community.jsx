import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { faGithubSquare, faSlack } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Community = () => {
  return (
    <section id="community">
      <h1>Community</h1>

      <div id="community-wrapper">
        <div className="figure-wrapper">
          <h2>Contribute to Nautilus</h2>
          <h3>An open source project on Github</h3>
          <figure>
            <ScrollAnimation animateIn="slideInLeft">
              <figcaption>
                <a
                  href="https://github.com/nautilusapp/nautilus"
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
        <div className="figure-wrapper">
          <div id="figure-wrapper2">
            <h2>Join us on Slack</h2>
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
        </div>
      </div>
    </section>
  );
};

export default Community;
