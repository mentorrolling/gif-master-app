import React, { useEffect, useState } from "react";
import GifCards from "../components/GifCards";
import InfoCategory from "../components/InfoCategory";
import { getGifSearch } from "../helpers/fetchApi";

const EntertainmentScreen = () => {
  const [gifs, setGifs] = useState([]);
  const datos = {
    categoria: "Entertainment",
    imagen:
      "https://media.giphy.com/avatars/entertainment/Poc7fb6dD9q5/200h.gif",
    texto: "Get the latest GIFs from movies, TV, music, celebrities.",
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

export default EntertainmentScreen;
