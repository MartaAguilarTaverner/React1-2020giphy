import React, { useState } from "react";

import { Link, useLocation } from 'wouter';

import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";

import {useGifs} from "../../hooks/useGifs";

const POPULAR_GIFS = ['Mapache', 'Panda', 'Gato', 'Perro', 'Nutria'];

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
    <form onSubmit={handleSubmit}>
      <input placeholder="Search a gif here..." onChange={handleChange} type="text" value={keyword} />
      <button>Search</button>
    </form>
    <h3 className="LastSearched-title">Last searched</h3>
    <ListOfGifs gifs={gifs} />
    <h3 className="PopularGifs-title">Los gifs más populares</h3>
    <ul>
      {POPULAR_GIFS.map((popularGif) => (
        <li key={popularGif}>
          <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
        </li>
      ))};
    </ul>
    </>
  )
};