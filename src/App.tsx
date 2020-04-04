import React from 'react';
import Particles from 'react-particles-js';
import './styles/styles.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from './components/TopNavBar.jsx';
import Hero from './components/Hero';
import Features from './components/Features.jsx';

function App() {
  return (
    <div className='App'>
      <Particles
        className='landing-bg'
        params={{
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
      />
      <TopNavBar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
