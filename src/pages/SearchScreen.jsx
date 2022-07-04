import React, { useState } from "react";
import { useParams } from "react-router-dom";
import GifCards from "../components/GifCards";
import useCategory from "../hooks/useCategory";

const SearchScreen = () => {
  const { termino } = useParams();
  const cantidadInicial = 18;
  const [cantidad, setCantidad] = useState(cantidadInicial);

  const gifs = useCategory(termino, cantidad);

  const showMore = () => {
    if (cantidad < 50) {
      setCantidad(cantidad + 6);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* Tarjetas con los gif encontrados en la búsqueda  */}
          <GifCards categoria={termino} gifs={gifs} showMore={showMore} />
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
