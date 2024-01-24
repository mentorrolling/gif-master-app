import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import GifCards from "../components/GifCards";

const SearchScreen = () => {
  const { termino } = useParams();

  const [datos, setDatos] = useState({
    categoria: termino,
  });

  useEffect(() => {
    setDatos({
      categoria: termino,
    });
  }, [termino]);

  const { gifs, showMore } = useCategory(datos);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <GifCards
            gifs={gifs}
            categoria={datos.categoria}
            showMore={showMore}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
