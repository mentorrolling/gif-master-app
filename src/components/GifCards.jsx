import React from "react";

const GifCards = ({ gifs, categoria }) => {
  return (
    <div className="col">
      <h3 className="text-white">{categoria} Gifs</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {gifs.map((gif) => (
          <div className="col" key={gif.id}>
            <div className="card h-100 rounded-3 animate__animated animate__fadeIn">
              <img
                src={gif.url}
                className="card-img-top img_paginas "
                alt={gif.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifCards;
