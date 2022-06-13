import React, { useEffect, useState } from "react";
import { getGifSearch } from "../helpers/fetchApi";

const SportsScreen = () => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifSearch("sports").then((response) => {
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
        <div className="col-3 d-flex flex-column align-items-center">
          <div className="img_col">
            <img
              src="https://media.giphy.com/channel_assets/sports/P658KMA9mwy4/200h.gif"
              alt="sport"
              className="img_paginas"
            />
          </div>
          <div className="texto_small mt-3 text-muted mx-5">
            <p>
              Your go-to for any and all sports GIFs! LeBron, Ronaldo, Gronk,
              Serena...We’ve got them all!
            </p>
            <p className="fw-bold">Follow on:</p>
            <div className="text-white text-start w-100 d-flex justify-content-start">
              <div>
                <i
                  className="fa fa-facebook-square me-3"
                  aria-hidden="true"
                ></i>
                <i className="fa fa-twitter me-3" aria-hidden="true"></i>
                <i className="fa fa-instagram me-3" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <h3 className="text-white">Sports Gifs</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {gifs.map((gif) => (
              <div className="col" key={gif.id}>
                <div className="card h-100 rounded-3">
                  <img
                    src={gif.url}
                    className="card-img-top img_paginas"
                    alt={gif.title}
                  />
                  {/* <div className="card-body">
                    <p className="card-text">{gif.title}</p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsScreen;
