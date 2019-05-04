export const getOMDBUrl = (query: string) =>
  `https://www.omdbapi.com/?apikey=${
    process.env.REACT_APP_OMDB_API_KEY
  }&s=${query}&type=movie`;
