import React from "react";
import GifCards from "../components/GifCards";
import InfoCategory from "../components/InfoCategory";
import useCategory from "../hooks/useCategory";

import { useParams } from "react-router-dom";

const CategoryScreen = () => {
  const { id } = useParams();
  let datos = {};

  switch (id) {
    case "entertainment":
      datos = {
        categoria: "Entertainment",
        imagen:
          "https://media.giphy.com/avatars/entertainment/Poc7fb6dD9q5/200h.gif",
        texto: "Get the latest GIFs from movies, TV, music, celebrities.",
      };
      break;

    case "sports":
      datos = {
        categoria: "Sports",
        imagen:
          "https://media.giphy.com/channel_assets/sports/P658KMA9mwy4/200h.gif",
        texto:
          "Your go-to for any and all sports GIFs! LeBron, Ronaldo, Gronk, Serena...We’ve got them all!",
      };
      break;
    case "reactions":
      datos = {
        categoria: "Reactions",
        imagen:
          "https://media.giphy.com/channel_assets/reactions/k2ybPvSfRQuK/200h.gif",
        texto: "Don't tell it to me, GIF it to me!",
      };
      break;
  }

  const { gifs, showMore } = useCategory(datos);

  return (
    <div className="container">
      <div className="row">
        <InfoCategory datos={datos} />

        <GifCards gifs={gifs} categoria={datos.categoria} showMore={showMore} />
      </div>
    </div>
  );
};

export default CategoryScreen;
