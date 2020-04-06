import React from "react";
import Particles from "react-particles-js";
import "./styles/styles.scss";
import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from "./components/TopNavBar.jsx";
import Hero from "./components/Hero";
import Features from "./components/Features.jsx";
import Team from "./components/Team.jsx";
import Contribute from "./components/Contribute.jsx";

function App() {
  return (
    <div className="App">
      <Particles
        className="landing-bg"
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: false,
              },
            },
            size: {
              value: 15,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <TopNavBar />
      <Hero />
      <Features />
      <Contribute />
      <Team />
    </div>
  );
}

export default App;
