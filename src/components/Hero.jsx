import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const version = process.env.REACT_APP_PACKAGE_VERSION;

const Hero = () => {
  let file = '';
  let operatingSystem = '';
  if (navigator.appVersion.indexOf('Win') !== -1) {
    file = `Nautilus Setup ${version}.exe`;
    operatingSystem = 'Windows';
  } else if (navigator.appVersion.indexOf('Mac') !== -1) {
    file = `Nautilus-${version}.dmg`;
    operatingSystem = 'Mac';
  } else if (navigator.appVersion.indexOf('Linux') !== -1) {
    file = `Nautilus-${version}.AppImage`;
    operatingSystem = 'Linux';
  }

  const googleAnalytics = () => {
    // @ts-ignore
    window.gtag('event', `${operatingSystem}-download`, {
      event_category: 'downloads',
    });
  };

  const url =
    process.env.NODE_ENV === 'production'
      ? './release/'
      : 'https://s3-us-west-1.amazonaws.com/nautilusdev.com/release/';
  return (
    <section id="hero">
      <div className="animated bounceInLeft">
        <h1>Nautilus</h1>
        <p>A Docker Compose Charting Tool</p>
        <div className="button-wrapper">
          <button>
            <FontAwesomeIcon icon={faGithub} />
            <a
              href="https://github.com/oslabs-beta/nautilus"
              alt="oslabs-nautilus-github-page"
              target="Blank"
            >
              Github
            </a>
          </button>
          <button>
            <FontAwesomeIcon icon={faDownload} />
            <a href={url + file} download onClick={googleAnalytics}>
              Download for {operatingSystem}
            </a>
          </button>
        </div>
      </div>

      <img
        className="animated bounceInRight"
        src="../assets/nautilus_main_logo.svg"
        alt="nautilus-logo"
      />
    </section>
  );
};

export default Hero;
