import React, { useEffect, useState } from "react";
import GifCards from "../components/GifCards";
import InfoCategory from "../components/InfoCategory";
import { getGifSearch } from "../helpers/fetchApi";

const ReactionsScreen = () => {
  const [gifs, setGifs] = useState([]);
  const datos = {
    categoria: "Reactions",
    imagen:
      "https://media.giphy.com/channel_assets/reactions/k2ybPvSfRQuK/200h.gif",
    texto: "Don't tell it to me, GIF it to me!",
  };
  useEffect(() => {
    getGifSearch(datos.categoria).then((response) => {
      console.log(response);
      let arreglo = [];
      response.forEach((element) => {
        const { title, id } = element;
        const { url } = element.images.original;
        arreglo.push({ id, title, url });
      });
      setGifs([...arreglo]);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <InfoCategory datos={datos} />
        <GifCards gifs={gifs} categoria={datos.categoria} />
      </div>
    </div>
  );
};

export default ReactionsScreen;
