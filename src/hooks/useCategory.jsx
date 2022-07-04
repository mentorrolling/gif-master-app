import { useState, useEffect } from "react";
import { getGifSearch } from "../helpers/fetchApi";

const useCategory = (categoria, cant) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifSearch(categoria, cant).then((respuesta) => {
      // console.log(respuesta);
      let arreglo = [];
      respuesta.forEach((element) => {
        const { title, id } = element;
        const { url } = element.images.original;
        arreglo.push({ title, id, url });
      });

      setGifs([...arreglo]);
    });
  }, [categoria, cant]);

  return gifs;
};

export default useCategory;
