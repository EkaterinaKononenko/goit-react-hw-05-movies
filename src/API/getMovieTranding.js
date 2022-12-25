import axios from 'axios';

const URL = 'https://api.themoviedb.org/';
const KEY = 'd912e4e6ac5ac1e34c6318ab6e2c9716';
const LANGUAGE = 'en-US';
const PAGE = 1;

const getMovieTranding = async () => {
  try {
    const response = await axios.get(
      `${URL}3/trending/movie/day?api_key=${KEY}&language=${LANGUAGE}&page=${PAGE}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getMovieTranding;
