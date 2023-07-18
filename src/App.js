import React from 'react';

import { Link, Route } from 'wouter';

import ListOfGifs from './components/ListOfGifs';

import './App.css';


export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/panda'>GIFS de Pandas</Link>
        <Link to='/gif/cat'>GIFS de Gatos</Link>
        <Link to='/gif/dog'>GIFS de Perros</Link>
        <Link to='/gif/racoon'>GIFS de Mapaches</Link>
        <Route
        component={ListOfGifs}
        path='/gif/:keyword' />

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