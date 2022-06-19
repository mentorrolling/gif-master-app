import { useState, useEffect } from "react";
import { getGifSearch } from "../helpers/fetchApi";

const useCategory = (datos, cant = 18) => {
  const [gifs, setGifs] = useState([]);
  const [cantidad, setCantidad] = useState(cant);

  useEffect(() => {
    getGifSearch(datos.categoria, cantidad).then((response) => {
      //   console.log(response);
      let arreglo = [];
      response.forEach((element) => {
        const { title, id } = element;
        const { url } = element.images.original;
        arreglo.push({ id, title, url });
      });
      setGifs([...arreglo]);
    });
  }, [cantidad, datos.categoria]);

  const showMore = () => {
    if (gifs.length <= 50) {
      setCantidad(cantidad + 6);
    }
  };

  return { gifs, showMore };
};

export default useCategory;
