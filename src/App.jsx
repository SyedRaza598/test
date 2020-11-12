import React, { useState, useEffect } from 'react';
import './App.css';
import './App.scss';
import './responsive.scss';
import Navigation from './components/navigation.jsx';
import audio from './assets/Song.mp3';
const App = () => {
  const audioPlay = () => {
    document.getElementById('myAudio').play();
    console.log('playing');
  };

  useEffect(() => {
    console.log('Called');
  });

  return (
    <div className="App" onLoad={audioPlay}>
      <audio src={audio} id="myAudio"></audio>
      {/* <button onClick={audioPlay}>Play</button> */}
      <Navigation />
    </div>
  );
};
export default App;
