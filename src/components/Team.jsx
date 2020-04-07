import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  const teamProfile = [
    {
      name: 'Joshua Nordstrom',
      github: 'https://www.github.com/jdnordy',
      linkedIn: 'https://www.linkedin.com/in/jdnordy/',
      avatar: './assets/joshua-avatar.svg',
      src: './assets/Joshua-Nordstrom.jpg',
    },
    {
      name: 'Tyler Hurtt',
      github: 'http://github.com/tylerhurtt',
      linkedIn: 'https://www.linkedin.com/in/tylerhurtt',
      avatar: './assets/tyler-avatar5.svg',
      src: './assets/Tyler-Hurtt.jpg',
    },
    {
      name: 'Aris Razuri',
      github: 'https://github.com/arazulu',
      linkedIn: 'https://www.linkedin.com/in/aris-razuri',
      avatar: './assets/aris-avatar.svg',
      src: './assets/Aris-Razuri.jpg',
    },
    {
      name: 'Danny Scheiner',
      github: 'https://github.com/dannyscheiner',
      linkedIn: 'https://www.linkedin.com/in/dannyscheiner/',
      avatar: './assets/dannyboy.svg',
      src: './assets/Danny.svg',
    },
    {
      name: 'Michael Dinh',
      github: 'https://github.com/michaelbayday',
      linkedIn: 'https://www.linkedin.com/in/michaelxdinh/',
      avatar: './assets/Mike.svg',
      src: './assets/Mike.svg',
    },
  ];
  const profiles = teamProfile.map((profile) => {
    const changeImgEnter = (e) => {
      e.currentTarget.className = 'animated bounceIn';
      return (e.currentTarget.src = profile.src);
    };

    const changeImgLeave = (e) => {
      e.currentTarget.className = '';
      return (e.currentTarget.src = profile.avatar);
    };
    return (
      <React.Fragment key={profile.name}>
        <div className="teamProfile">
          <div className="team-icon">
            <img
              src={profile.avatar}
              alt={profile.name}
              onMouseEnter={changeImgEnter}
              onMouseLeave={changeImgLeave}
            ></img>
          </div>
          <div className="team-profile-title">
            <h4>{profile.name}</h4>
          </div>
          <div className="team-links">
            <a href={profile.github} target="Blank">
              <FontAwesomeIcon icon={faGithub} size="3x" color="#e0e9f1" />
            </a>
            <a href={profile.linkedIn} target="Blank">
              <FontAwesomeIcon icon={faLinkedin} size="3x" color="#e0e9f1" />
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="team-wrapper">
      <h1 id="team">Meet The Team</h1>
      <div className="team-container">{profiles}</div>
    </div>
  );
};

export default Team;
