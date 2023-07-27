import React, { useContext } from "react";
import { GifsContextProvider } from "../../context/GifsContextProvider";

export default function Detail ({ params }) {
  const {gifs} = useContext(GifsContextProvider);
  console.log({gifs});

  return (
    <h1>Gif con id {params.id}</h1>
  )
};