import React, { useEffect, useState } from 'react';

import Gif from '../Gif/Gif';
import getGifs from '../../services/getGifs';

export default function ListOfGifs ({ params }) {
  const { keyword } = params
  const [loading, setLoading] = useState(false);

  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    setLoading(true)
    getGifs({keyword})
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword]);
  //ALWAYS PUT DEPENDENCIES TO NOT CREATE AN INFINITE LOOP

  if (loading) return <i>......cargando</i>

  return <div>
    {
      gifs.map(({id, title, url}) =>
      < Gif
        key={id}
        id={id}
        title={title}
      url={url}
      />
      )
    }
  </div>
  }