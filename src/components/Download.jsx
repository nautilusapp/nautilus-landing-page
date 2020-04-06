import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinux,
  faWindows,
  faApple,
} from '@fortawesome/free-brands-svg-icons';

const version = process.env.REACT_APP_PACKAGE_VERSION;

const Download = () => {
  const url =
    process.env.NODE_ENV === 'production'
      ? './release/'
      : 'https://s3-us-west-1.amazonaws.com/nautilusdev.com/release/';

  return (
    <div id="download-title">
      <h2>Download</h2>
      <div id="download">
        <div className="download-icon">
          <a
            href={url + `Nautilus-${version}.AppImage`}
            className="download-icons animated flipInX"
            alt="download-for-linux"
          >
            <FontAwesomeIcon icon={faLinux} size="6x" color="#e0e9f1" />
            <p>Linux</p>
          </a>
        </div>
        <div className="download-icon">
          <a
            href={url + `Nautilus+Setup+${version}.exe`}
            className="download-icons animated flipInX"
            alt="download-for-windows"
          >
            <FontAwesomeIcon icon={faWindows} size="6x" color="#e0e9f1" />
            <p>Windows</p>
          </a>
        </div>
        <div className="download-icon">
          <a
            href={url + `Nautilus-${version}.dmg`}
            className="download-icons animated flipInX"
            alt="download-for-mac"
          >
            <FontAwesomeIcon icon={faApple} size="6x" color="#e0e9f1" />
            <p>Mac OS</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
