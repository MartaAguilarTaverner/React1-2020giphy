import React from "react";

import Gif from "../../components/Gif";
import useGlobalGif from "../../hooks/useGlobalGif";

export default function Detail ({ params }) {
  const gifs = useGlobalGif();

  const gif = gifs.find(singleGif => singleGif.id === params.id);

  return (
  <Gif {...gif} />
  )
};