// 'https://api.giphy.com/v1/gifs/trending'

const apiKey = "yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf";
const limite = 20;

//funcion para obtener gifs trending
export const getGifTrending = async () => {
  try {
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limite}`
    );
    const { data } = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

//funcion que traiga un gif por su id

//Funcion que me devuelva el resultado de una búsqueda
export const getGifSearch = async (termino, cantidad) => {
  try {
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${termino}&limit=${cantidad}`
    );
    const { data } = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
