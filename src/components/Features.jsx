import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Features = () => {
  return (
    <section id='features'>
      <h1>Features</h1>
      <div className='figures-wrapper'>
        <figure>
          <img src={process.env.PUBLIC_URL + '/assets/upload.gif'} alt='' />
          <ScrollAnimation animateIn='fadeInRight'>
            <figcaption>Upload your Docker-Compose file</figcaption>
          </ScrollAnimation>
        </figure>
        <figure>
          <ScrollAnimation animateIn='fadeInLeft'>
            <figcaption className='second-caption'>
              Display your service's info, ports and volumes
            </figcaption>
          </ScrollAnimation>
          <img
            src={process.env.PUBLIC_URL + '/assets/optionsChange.gif'}
            alt=''
          />
        </figure>
        <figure>
          <img src={process.env.PUBLIC_URL + '/assets/viewChange.gif'} alt='' />
          <ScrollAnimation animateIn='fadeInRight'>
            <figcaption>
              Choose to view your services by networks or a container dependent
              view
            </figcaption>
          </ScrollAnimation>
        </figure>
      </div>
    </section>
  );
};

export default Features;
