import React, { useState } from "react";

import { Link } from 'wouter';

const POPULAR_GIFS = ['Mapache', 'Panda', 'Gato', 'Perro', 'Nutria'];

export default function Home() {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault()
    //navegar a otra ruta
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={keyword} />
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