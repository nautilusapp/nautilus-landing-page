import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Features = () => {
  return (
    <section id="features">
      <h1>Features</h1>
      <div className="figures-wrapper">
        <figure>
          <div className="img-wrapper">
            <video autoplay="true" loop="true" playsinline>
              <source src="./assets/upload.webm" type="video/webm" />
              <source src="./assets/upload.mp4" type="video/mp4" />
            </video>
          </div>
          <ScrollAnimation animateIn="fadeInRight">
            <div className="caption-wrapper">
              <figcaption>Upload your Docker-Compose file</figcaption>
            </div>
          </ScrollAnimation>
        </figure>
        <figure>
          <ScrollAnimation animateIn="fadeInLeft">
            <div className="caption-wrapper">
              <figcaption className="second-caption">
                Display your service's info, ports and volumes
              </figcaption>
            </div>
          </ScrollAnimation>
          <div className="img-wrapper">
            <video autoplay="true" loop="true" playsinline>
              <source src="./assets/optionsChange.webm" type="video/webm" />
              <source src="./assets/optionsChange.mp4" type="video/mp4" />
            </video>
          </div>
        </figure>
        <figure>
          <div className="img-wrapper">
            <video autoplay="true" loop="true" playsinline>
              <source src="./assets/viewChange.webm" type="video/webm" />
              <source src="./assets/viewChange.mp4" type="video/mp4" />
            </video>
          </div>
          <ScrollAnimation animateIn="fadeInRight">
            <div className="caption-wrapper">
              <figcaption>
                Choose to view your services by networks or a container
                dependent view
              </figcaption>
            </div>
          </ScrollAnimation>
        </figure>
      </div>
    </section>
  );
};

export default Features;
