import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GifSearch = () => {
  const navigate = useNavigate();

  const [termino, setTermino] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value);
    setTermino(e.target.value);
  };

  const handleClick = () => {
    if (termino) {
      navigate(`/search/${termino}`);
    }
  };

  return (
    <div className="container sticky-top">
      <div className="row">
        <div className="col bg-dark">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control input_search"
              placeholder="Search all the Gif"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={termino}
              onChange={handleChange}
            />
            <button
              className="btn btn-search"
              type="button"
              id="button-addon2"
              onClick={handleClick}
            >
              <i className="fa fa-search fa-2x" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GifSearch;
