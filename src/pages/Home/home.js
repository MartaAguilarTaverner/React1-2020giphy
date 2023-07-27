import React, { useEffect, useState } from "react";

import { Link, useLocation } from 'wouter';

import getGifs from "../../services/getGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";

const POPULAR_GIFS = ['Mapache', 'Panda', 'Gato', 'Perro', 'Nutria'];

export default function Home() {
  const [keyword, setKeyword] = useState('');

  const [path, pushLocation] = useLocation();
  //useHistory in react router in wouter is the useLocation

  const [ loading, setLoading] = useState(false);
  const [ gifs, setGifs ] = useState([]);

  useEffect(function () {
    setLoading(true)
    getGifs({ keyword: 'Rick' })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      });
  }, [keyword]);

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