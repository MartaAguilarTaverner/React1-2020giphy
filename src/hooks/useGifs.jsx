import { useContext, useState, useEffect } from "react";

import getGifs from "../services/getGifs";

import GifsContext from "../context/GifsContext";

export function useGifs ({ keyword } = { keyword: null }) {
  const [ loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(function () {
    setLoading(true)
    //we recover la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        //we keep keyword in the localStorage
        localStorage.setItem('lastKeyword', keyword)
      });
  }, [keyword, setGifs]);
//ALWAYS PUT DEPENDENCIES TO NOT CREATE AN INFINITE LOOP it indicates when the component is going to render

  return {loading, gifs};
};