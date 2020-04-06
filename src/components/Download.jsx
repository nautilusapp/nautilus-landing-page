import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinux,
  faWindows,
  faApple,
} from '@fortawesome/free-brands-svg-icons';

const Download = () => {
  return (
    <div id='download-title'>
      <h2>Download</h2>
      <div id='download'>
        <div className='download-icon'>
          <a
            href='www.google.com'
            className='download-icons animated flipInX'
            alt='download-for-linux'
          >
            <FontAwesomeIcon icon={faLinux} size='6x' color='#e0e9f1' />
            <p>Linux</p>
          </a>
        </div>
        <div className='download-icon'>
          <a
            href='www.google.com'
            className='download-icons animated flipInX'
            alt='download-for-windows'
          >
            <FontAwesomeIcon icon={faWindows} size='6x' color='#e0e9f1' />
            <p>Windows</p>
          </a>
        </div>
        <div className='download-icon'>
          <a
            href='www.google.com'
            className='download-icons animated flipInX'
            alt='download-for-mac'
          >
            <FontAwesomeIcon icon={faApple} size='6x' color='#e0e9f1' />
            <p>Mac OS</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
