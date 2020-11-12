import React from 'react';
import { useState , useEffect} from 'react';
import Particles from 'react-particles-js';
import Footer from './footer';

const About = (props) => {
  const [check , setCheck] = useState(false);
  
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div id="pic-div" className="col-sm-12 col-md-12 col-lg-6">
            <p>Image here</p>
          </div>
          <div id="hire-me" className="col-sm-12 col-md-12 col-lg-6">
            <h1>Why Hire Me?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              quas nisi velit sunt delectus, ratione, explicabo tenetur, neque
              alias eaque recusandae nostrum placeat quasi magni incidunt.
              Quibusdam nihil ab sed deserunt fugit quasi, saepe optio suscipit!
              Incidunt saepe, repudiandae, quaerat quas debitis voluptatem
              aliquid perspiciatis facere itaque culpa neque! Itaque!
            </p>
            <h4>Skills:</h4>
            <div className="skills">
              <span>Html/Css</span>
              <span id="level">80%</span>
              <div id="progress"></div>
            </div>
            <div className="skills">
              <span>Bootstrap</span>
              <span id="level">80%</span>
              <div id="progress1"></div>
            </div>
            <div className="skills">
              <span>JavaScript</span>
              <span id="level">80%</span>
              <div id="progress2"></div>
            </div>
            <div className="skills">
              <span>React js</span>
              <span id="level">80%</span>
              <div id="progress3"></div>
            </div>
          </div>
        </div>
        <div className="experience ">
          <div id="header" className="col-12">
            <h1>Work Experience</h1>
          </div>
          <div className="companies">
          <div id="company1" className="company">
            <h3>DevBunch Pvt.Ltd</h3>
          </div>
          <div id="discription1" className="">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              expedita molestias facilis nam rerum ad harum odit, veniam
              consequuntur assumenda voluptatum error reiciendis quos quam dolor
              provident sunt itaque voluptates.Possimus quisquam esse ullam
              suscipit excepturi eveniet placeat. Odio error voluptatum ipsum.
              Atque veritatis eligendi inventore, quisquam modi alias suscipit
              delectus perferendis.
            </p>
          </div>
          <div id="company2" className=" company">
            <h3>DevBunch Pvt.Ltd</h3>
          </div>
          <div id="discription2" className="">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              expedita molestias facilis nam rerum ad harum odit, veniam
              consequuntur assumenda voluptatum error reiciendis quos quam dolor
              provident sunt itaque voluptates.Possimus quisquam esse ullam
              suscipit excepturi eveniet placeat. Odio error voluptatum ipsum.
              Atque veritatis eligendi inventore, quisquam modi alias suscipit
              delectus perferendis.
            </p>
          </div>
          </div>
          <div className="timeLine"></div>
        </div>
      </div>
      <Footer email={'shah.one3@gmail.com'} password={'4928'} check={check} />
      <Particles
        id="particles-container-about"
        params={{
          particles: {
            number: {
              value: 5,
              density: {
                enable: false,
                value_area: 1300,
              },
            },
            color: {
              value: '#161514',
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
    </React.Fragment>
  );
};
export default About;
