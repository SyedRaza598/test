import React from 'react';
import Particles from 'react-particles-js';
import Footer from './footer';
import myPic from './IMG1.png';

const Home = () => {
  return (
    <React.Fragment>
        <Particles
          id="particles-container"
          params={{
            particles: {
              number: {
                value: 20,
                density: {
                  enable: false,
                  value_area: 1300,
                },
              },
              color: {
                value: '#32965d',
              },
              shape: {
                type: 'circle',
                //   stroke: {
                //     width: 5,
                //     color: 'green',
                //   },
                polygon: {
                  nb_sides: 1,
                },
                image: {
                  src: 'img/github.svg',
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 1,
                random: false,
                anim: {
                  enable: false,
                  speed: 2,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 200,
                color: '#fff',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 5,
                //   direction: 'none',
                //   random: false,
                //   straight: false,
                //out_mode: 'out',
                bounce: true,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'grab',
                  distance: 200,
                },
                onclick: {
                  enable: true,
                  mode: 'push',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 240,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <div className="wrapper">
        <div id="intro">
          <div id="content">
            <h1>
              <span>Hi!</span> I'm Syed Raza-
              <br />
              Front-end Developer/Designer<span>.</span>
            </h1>
            <div className="buttons">
              <button id="resume">My Resume</button>
              <button id="contact">Contact Me</button>
            </div>
          </div>
        </div>
        <div id="img-div">
          <img src={myPic} alt=""/>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
