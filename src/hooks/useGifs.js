import { useState, useEffect } from "react";

import getGifs from "../services/getGifs";

export default function useGifs ({ keyword }) {
  const [ loading, setLoading] = useState(false);
  const [ gifs, setGifs ] = useState([]);

  useEffect(function () {
    setLoading(true)
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      });
  }, [keyword]);
//ALWAYS PUT DEPENDENCIES TO NOT CREATE AN INFINITE LOOP it indicates when the component is going to render

return {loading, gifs};

};