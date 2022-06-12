const apiKey = "dEhcKNuYIGZpvoZJELutQ7AOiohZUZtr";
const limite = 20;

export const getGifTrending = async () => {
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limite}`
  );
  const { data } = await resp.json();

  return data;
};
