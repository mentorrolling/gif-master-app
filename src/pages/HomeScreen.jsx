import React from "react";
import banner from "../assets/banner.gif";

const HomeScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="w-100">
            <img className="img_banner" src={banner} alt="banner" />
          </div>
        </div>
      </div>
      <div className="row mt-5 ">
        <div className="col">
          <h3 className="text-white">
            <i className="fa fa-line-chart" aria-hidden="true"></i> Trending
          </h3>
        </div>
      </div>

      <div className=" galeria">{/* Imagenes de gifs  */}</div>
    </div>
  );
};

export default HomeScreen;
