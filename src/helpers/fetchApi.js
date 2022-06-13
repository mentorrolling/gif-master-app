const apiKey = "dEhcKNuYIGZpvoZJELutQ7AOiohZUZtr";
const limite = 20;

export const getGifTrending = async () => {
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limite}`
  );
  const { data } = await resp.json();

  return data;
};

export const getGifById = async (id) => {
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`
  );
  const { data } = await resp.json();
  return data;
};

export const getGifSearch = async (termino) => {
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${termino}&limit=${limite}`
  );
  const { data } = await resp.json();
  return data;
};
