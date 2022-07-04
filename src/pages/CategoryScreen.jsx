import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGifSearch } from "../helpers/fetchApi";
import InfoCategory from "../components/InfoCategory";
import GifCards from "../components/GifCards";

const CategoryScreen = () => {
  const { id } = useParams();
  const cantidadInicial = 18;
  // console.log(id);
  const [cantidad, setCantidad] = useState(cantidadInicial);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifSearch(id, cantidad).then((respuesta) => {
      // console.log(respuesta);
      let arreglo = [];
      respuesta.forEach((element) => {
        const { title, id } = element;
        const { url } = element.images.original;
        arreglo.push({ title, id, url });
      });
      console.log(arreglo);
      setGifs([...arreglo]);
    });
  }, [id, cantidad]);

  useEffect(() => {
    setCantidad(cantidadInicial);
  }, [id]);

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
