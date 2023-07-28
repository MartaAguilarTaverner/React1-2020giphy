import React, { useState } from "react";

import { Link, useLocation } from 'wouter';

import ListOfGifs from "../../components/ListOfGifs";

import {useGifs} from "../../hooks/useGifs";

import './home.css';

const POPULAR_GIFS = ['Mapache', 'Panda', 'Gato', 'Perro', 'Nutria']

export default function Home() {
  const [keyword, setKeyword] = useState('');

  const [, pushLocation] = useLocation();
  //useHistory in react router in wouter is the useLocation

  const { gifs } = useGifs();

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
  };

  const handleChange = evt => {
    setKeyword(evt.target.value)
  };
  return (
    <>
    <form className="FormGif-searcher" onSubmit={handleSubmit}>
      <input className="Gif-enter-text" placeholder="Search a gif here..." onChange={handleChange} type="text" value={keyword} />
      <button className="GifButton">Search</button>
    </form>
    <h3 className="PopularGifs-title">Los gifs más populares</h3>
    <ul className="PopularGif-list">
      {POPULAR_GIFS.map((popularGif) => (
        <li key={popularGif}>
          <Link className="Gif-link" to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
        </li>
      ))}
    </ul>
    <h3 className="LastSearched-title">Last searched</h3>
    <ListOfGifs gifs={gifs} />
    </>
  )
};