import React from 'react';

import { Link, Route } from 'wouter';

import Home from './pages/Home/home';
import SearchResults from './pages/SearchResults/searchResults';
import Detail from './pages/Detail/detail';

import './App.css';


export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
        <img className='App-logo' alt='giffy Logo' src='/public/logo.png' />
        </Link>
        <Route
          component={Home}
          path='/'
        />
        <Route
          component={SearchResults}
          path='/search/:keyword'
          />
        <Route
          component={Detail}
          path='/gif/:id'
          />
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