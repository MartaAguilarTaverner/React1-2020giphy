import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';


export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword='mapache' />
      </section>
    </div>
  );
}

/*
FOREACH GO OVER A LIST OF ELEMENTS BUT DON'T SHOW THEM BUT THE MAP RETURN THE RESULTS IN THE SCREEN.
IN THE ARROW FUNCTION RETURNS IF IS ONLY ONE LINE
THE USE STATE THE STATE CHANGES AND RENDER THE COMPONENT EACH TIME IT CHANGES, AND
FOR EACH CHANGE IT ACTIVATES THE USE EFFECT
AND THE FUNCTION OF IT IS ACTIVATED EACH TIME OUR COMPONENT RENDER(STATE CHANGES)
 */