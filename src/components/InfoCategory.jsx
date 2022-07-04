import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const InfoCategory = ({ id }) => {
  const [datos, setDatos] = useState({});
  useEffect(() => {
    switch (id) {
      case "entertainment":
        setDatos({
          categoria: "Entertainment",
          imagen:
            "https://media.giphy.com/avatars/entertainment/Poc7fb6dD9q5/200h.gif",
          texto: "Get the latest GIFs from movies, TV, music, celebrities.",
        });
        break;

      case "sports":
        setDatos({
          categoria: "Sports",
          imagen:
            "https://media.giphy.com/channel_assets/sports/P658KMA9mwy4/200h.gif",
          texto:
            "Your go-to for any and all sports GIFs! LeBron, Ronaldo, Gronk, Serena...We’ve got them all!",
        });
        break;
      case "reactions":
        setDatos({
          categoria: "Reactions",
          imagen:
            "https://media.giphy.com/channel_assets/reactions/k2ybPvSfRQuK/200h.gif",
          texto: "Don't tell it to me, GIF it to me!",
        });
        break;
    }
  }, [id]);

  return (
    <div className="col-3  d-flex flex-column align-items-center ">
      <div className="img_col ">
        <img
          src={datos.imagen}
          alt={datos.categoria}
          className="img_paginas animate__animated animate__fadeIn"
        />
      </div>
      <div className="texto_small mt-3 text-muted mx-5">
        <p>{datos.texto}</p>
        <p className="fw-bold">Follow on:</p>
        <div className="text-white text-start w-100 d-flex justify-content-start">
          <div>
            <i className="fa fa-facebook-square me-3" aria-hidden="true"></i>
            <i className="fa fa-twitter me-3" aria-hidden="true"></i>
            <i className="fa fa-instagram me-3" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCategory;
