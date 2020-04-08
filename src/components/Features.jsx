import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Features = () => {
  return (
    <section id="features">
      <h1>Features</h1>
      <div className="figures-wrapper">
        <figure>
          <div className="img-wrapper">
            <img src={process.env.PUBLIC_URL + '/assets/upload.gif'} alt="" />
          </div>
          <ScrollAnimation animateIn="fadeInRight">
            <div className="caption-wrapper">
              <figcaption>Upload your Compose file</figcaption>
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
            <img
              src={process.env.PUBLIC_URL + '/assets/optionsChange.gif'}
              alt=""
            />
          </div>
        </figure>
        <figure>
          <div className="img-wrapper">
            <img
              src={process.env.PUBLIC_URL + '/assets/viewChange.gif'}
              alt=""
            />
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
