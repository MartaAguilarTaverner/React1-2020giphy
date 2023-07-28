import React from 'react';

import { Link, Route } from 'wouter';

import StaticContext from './context/StaticContext';
import {GifsContextProvider} from './context/GifsContext';

import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';


import './App.css';

export default function App() {
  return (
    <StaticContext.Provider value={ {name:'marta', subscribed: true}}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
          <img className='App-logo' alt='giffy Logo' src='logo.png' />
          </Link>
          <GifsContextProvider>
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
            </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

/*
FOREACH GO OVER A LIST OF ELEMENTS BUT DON'T SHOW THEM BUT THE MAP RETURN THE RESULTS IN THE SCREEN.
IN THE ARROW FUNCTION RETURNS IF IS ONLY ONE LINE
THE USE STATE THE STATE CHANGES AND RENDER THE COMPONENT EACH TIME IT CHANGES, AND
FOR EACH CHANGE IT ACTIVATES THE USE EFFECT the params indicate when it will render(what have to change)
AND THE FUNCTION OF IT IS ACTIVATED EACH TIME OUR COMPONENT RENDER(STATE CHANGES)
 */