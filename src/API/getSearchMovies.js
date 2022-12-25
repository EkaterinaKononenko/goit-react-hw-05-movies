import axios from 'axios';

const URL = 'https://api.themoviedb.org/';
const KEY = 'd912e4e6ac5ac1e34c6318ab6e2c9716';
const LANGUAGE = 'en-US';
const PAGE = 1;

const getSearchMovies = async (searchMovie) => {
  try {
    const response = await axios.get(
      `${URL}3/search/movie?api_key=${KEY}&query=${searchMovie}&language=${LANGUAGE}&page=${PAGE}&include_adult=false`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getSearchMovies;

