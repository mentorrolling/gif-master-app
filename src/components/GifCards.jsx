import React from "react";
import { Link } from "react-router-dom";

const GifCards = ({ gifs, categoria, showMore }) => {
  // console.log(gifs);
  return (
    <>
      {gifs.length > 0 ? (
        <div className="col">
          <h3 className="text-white">{categoria} Gifs</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {gifs.map((gif) => (
              <div className="col" key={gif.id}>
                <div className="card h-100 rounded-3">
                  <Link to={`/gif/${gif.id}`}>
                    <img
                      src={gif.url}
                      // src={gif.url}
                      className="card-img-top img_paginas animate__animated animate__fadeIn "
                      alt={gif.title}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {gifs.length && (
            <div className="my-3 d-flex justify-content-center">
              <button className="btn btn-search" onClick={showMore}>
                More
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="col">
          <h3 className="text-white">Not found</h3>
        </div>
      )}
    </>
  );
};

export default GifCards;
