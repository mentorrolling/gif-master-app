import React, { useEffect, useState } from "react";
import GifCards from "../components/GifCards";
import InfoCategory from "../components/InfoCategory";
// import { getGifSearch } from "../helpers/fetchApi";
import useCategory from "../hooks/useCategory";

const ReactionsScreen = () => {
  const datos = {
    categoria: "Reactions",
    imagen:
      "https://media.giphy.com/channel_assets/reactions/k2ybPvSfRQuK/200h.gif",
    texto: "Don't tell it to me, GIF it to me!",
  };

  const { gifs, showMore } = useCategory(datos);
  // useEffect(() => {
  //   getGifSearch(datos.categoria).then((response) => {
  //     console.log(response);
  //     let arreglo = [];
  //     response.forEach((element) => {
  //       const { title, id } = element;
  //       const { url } = element.images.original;
  //       arreglo.push({ id, title, url });
  //     });
  //     setGifs([...arreglo]);
  //   });
  // }, []);

  return (
    <div className="container">
      <div className="row">
        <InfoCategory datos={datos} />
        <GifCards gifs={gifs} categoria={datos.categoria} showMore={showMore} />
      </div>
    </div>
  );
};

export default ReactionsScreen;
