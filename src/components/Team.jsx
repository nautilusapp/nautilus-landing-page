import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  const teamProfile = [
    {
      name: "Joshua Nordstrom",
      github: "https://www.github.com/jdnordy",
      linkedIn: "https://www.linkedin.com/in/jdnordy/",
      src: "./assets/Joshua-Nordstrom.jpg",
    },
    {
      name: "Tyler Hurtt",
      github: "http://github.com/tylerhurtt",
      linkedIn: "https://www.linkedin.com/in/tylerhurtt",
      src: "./assets/Tyler-Hurtt.jpg",
    },
    {
      name: "Aris Razuri",
      github: "https://github.com/arazulu",
      linkedIn: "www.linkedin.com/in/aris-razuri",
      src: "./assets/Aris-Razuri.jpg",
    },
    {
      name: "Danny Scheiner",
      github: "https://github.com/dannyscheiner",
      linkedIn: "https://www.linkedin.com/in/dannyscheiner/",
      src: "./assets/Danny.svg",
    },
    {
      name: "Michael Dinh",
      github: "https://github.com/michaelbayday",
      linkedIn: "https://www.linkedin.com/in/michaelxdinh/",
      src: "./assets/Mike.svg",
    },
  ];
  const profiles = teamProfile.map((profile) => {
    return (
      <React.Fragment>
        <div className="teamProfile">
          <span className="team-icon">
            <img src={profile.src} alt={profile.name}></img>
          </span>
          <div>{profile.name}</div>
          <div>
            <a href={profile.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={profile.linkedIn}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return <div className="team-wrapper">{profiles}</div>;
};

export default Team;
