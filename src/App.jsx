import React, { useState, useEffect } from 'react';
import './App.css';
import './scss/App.scss';
import './responsive.scss';
import Navigation from './components/navigation.jsx';
import audio from './assets/Song.mp3';
const App = () => {
  const audioPlay = () => {
    document.getElementById('myAudio').play();
    console.log('playing');
  };

  const findSize = () => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    console.log(`window width is ${w} and height is ${h}`);
  };

  useEffect(() => {
    console.log('Called');
  });

  return (
    <div className="App" >
      <audio src={audio} id="myAudio"></audio>
      {/* <button onClick={audioPlay}>Play</button> */}
      <Navigation />
    </div>
  );
};
export default App;
