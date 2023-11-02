import axios from 'axios';
const api_key = 'f6d968bc9808c07e077eb94ac6b79371';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingFilms = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${api_key}`);
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${api_key}`);
  return response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(`/search/movie?query=${query}&api_key=${api_key}`);
  return response.data;
};
