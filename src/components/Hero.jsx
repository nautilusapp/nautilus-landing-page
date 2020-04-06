import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section id="hero">
      <div>
        <h2>Nautilus</h2>
        <p>A Docker Compose Charting Tool</p>
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
          <FontAwesomeIcon icon={faChevronCircleDown} />
          Download
        </button>
      </div>
      <img src="../assets/nautilus_main_logo.svg" alt="nautilus-logo" />
    </section>
  );
};

export default Hero;
