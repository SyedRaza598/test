import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import gsap from 'gsap';
import About from './about';
import Projects from './projects';
import Home from './home';

const Navigation = () => {
  const [toggle, setToggle] = useState('Menu');
  const duration = 0.3;
  let menuColor = document.querySelectorAll('.menuLine');
  let menuState = document.getElementById('toggler');

  const crossRotate = () => {
    if (toggle == 'Close') {
      gsap.to('#burgerWraper', {
        rotate: 180,
      });
      console.log('Hovered');
    } else {
      console.log('static');
    }
    console.log(window.location.pathname);
  };
  const crossRotateReset = () => {
    if (toggle == 'Close') {
      gsap.to('#burgerWraper', {
        rotate: -180,
      });
      console.log('Hovered2');
    } else {
      console.log('static2');
    }
  };

  const navToggler = (currentPath) => {
    for (let i = 0; i < menuColor.length; i++) {
      if (currentPath == '/projects' || currentPath == '/about') {
        menuState.style.color = 'black';
        menuColor[i].style.backgroundColor = 'black';
        console.log(currentPath);
        console.log('done');
      } else {
        menuColor[i].style.backgroundColor = '#ffff';
        menuState.style.color = '#fff';
        console.log('not-done');
      }
    }
    //Toogler
    if (toggle == 'Menu') {
      setToggle('Close');
      gsap.to('#menu', {
        width: '100%',
        ease: 'power4',
      });
      gsap.to('#line1', {
        y: 10,
        rotate: 135,
        duration: 0.3,
      });
      gsap.to('#line2', {
        opacity: 0,
        duration: 0.1,
      });
      gsap.to('#line3', {
        y: -10,
        rotate: -135,
        duration: 0.3,
      });
      gsap.to('span', {
        marginTop: '8px',
        duration: 0.3,
      });
      gsap.to('#menuUl', {
        delay: 0.3,
        visibility: 'visible',
      });
      gsap.from('#menuLi', {
        y: 150,
        ease: 'power2',
        delay: 0.1,
        stagger: {
          amount: 0.2,
        },
      });
    } else {
      setToggle('Menu');
      gsap.to('#menu', {
        width: '0%',
        ease: 'power4',
      });
      gsap.to('#line1', {
        y: 0,
        rotate: 0,
        duration: duration,
      });
      gsap.to('#line2', {
        opacity: 1,
        duration: 0.8,
      });
      gsap.to('#line3', {
        y: 0,
        rotate: 0,
        duration: 0.3,
      });
      gsap.to('span', {
        marginTop: '6px',
        duration: 0.3,
      });
      gsap.to('#menuUl', {
        visibility: 'hidden',
      });
    }
  };

  useEffect(() =>{
    // navToggler('/');
  });

  return (
    <React.Fragment>
      <div className="topDiv"></div>
        <div id="toggler" onClick={() => navToggler('/projectss')}>
          {toggle}
          <div
            id="burgerWraper"
            onMouseEnter={crossRotate}
            onMouseLeave={crossRotateReset}
          >
            <span id="line1" className="menuLine"></span>
            <span id="line2" className="menuLine"></span>
            <span id="line3" className="menuLine"></span>
          </div>
      </div>
      <Router>
        <div id="menu">
          <ul id="menuUl">
            <li id="menuLi" onClick={() => navToggler('/')}>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li id="menuLi" onClick={() => navToggler('/projects')}>
              <Link className="link" to="/projects">
                Projects
              </Link>
            </li>
            <li id="menuLi" onClick={() => navToggler('/about')}>
              <Link className="link" to="/about">
                About Me
              </Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
export default Navigation;
