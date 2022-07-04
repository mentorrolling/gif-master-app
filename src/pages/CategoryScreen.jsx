import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCategory from "../hooks/useCategory";
// import { getGifSearch } from "../helpers/fetchApi";
import InfoCategory from "../components/InfoCategory";
import GifCards from "../components/GifCards";

const CategoryScreen = () => {
  const { id } = useParams();
  const cantidadInicial = 18;
  // console.log(id);
  const [cantidad, setCantidad] = useState(cantidadInicial);
  const gifs = useCategory(id, cantidad);

  //Cuando cambia el id (categoria) entonces cantidad vuelve a su valor inicial
  useEffect(() => {
    setCantidad(cantidadInicial);
  }, [id]);

  //Funbción para cargar más Gifs
  const showMore = () => {
    if (cantidad < 50) {
      setCantidad(cantidad + 6);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* Información de categorias  */}
        <InfoCategory id={id} />

        {/* Tarjetas de gifs  */}
        <GifCards categoria={id} gifs={gifs} showMore={showMore} />
      </div>
    </div>
  );
};

export default CategoryScreen;
