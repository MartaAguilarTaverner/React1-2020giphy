import React, { useState } from "react";

import { Link, useLocation } from 'wouter';

const POPULAR_GIFS = ['Mapache', 'Panda', 'Gato', 'Perro', 'Nutria'];

export default function Home() {
  const [keyword, setKeyword] = useState('');

  const [path, pushLocation] = useLocation();
  //useHistory in react router in wouter is the useLocation

  console.log(path);

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