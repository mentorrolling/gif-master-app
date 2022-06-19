import React, { useEffect, useState } from "react";
import GifCards from "../components/GifCards";
import InfoCategory from "../components/InfoCategory";
import useCategory from "../hooks/useCategory";
// import { getGifSearch } from "../helpers/fetchApi";

const SportsScreen = () => {
  // const [gifs, setGifs] = useState([]);
  const datos = {
    categoria: "Sports",
    imagen:
      "https://media.giphy.com/channel_assets/sports/P658KMA9mwy4/200h.gif",
    texto:
      "Your go-to for any and all sports GIFs! LeBron, Ronaldo, Gronk, Serena...We’ve got them all!",
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

export default SportsScreen;
