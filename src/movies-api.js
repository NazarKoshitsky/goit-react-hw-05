import axios from "axios";

const url = "https://api.themoviedb.org";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTQyMGVmZDcyN2ZkYjgwOWNmY2YxMjE5ZDgxNzI0MCIsInN1YiI6IjY2NGY1MTFkOGU1MTZmMGI3YWVjMWM0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ga1tmZS2AsUDxccxsDUe9YbU3oOQAahCT3sCCbAknus",
  },
};

export const getMovies = async () => {
  const response = await axios.get(
    `${url}/3/trending/movie/day?language=en-US`,
    options
  );

  return response.data;
};

export const getMoviesSearch = async (query) => {
  const response = await axios.get(
    `${url}/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(
    `${url}/3/movie/${movieId}?language=en-US`,
    options
  );
  return response.data;
};

export const getMovieRewiews = async (movieId) => {
  const response = await axios.get(
    `${url}/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(
    `${url}/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return response.data;
};