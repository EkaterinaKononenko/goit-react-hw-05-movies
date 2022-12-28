import axios from 'axios';

const URL = 'https://api.themoviedb.org/';
const KEY = 'd912e4e6ac5ac1e34c6318ab6e2c9716';
const LANGUAGE = 'en-US';
const PAGE = 1;

const getMovieReviews = async id => {
  try {
    const response = await axios.get(
      `${URL}3/movie/${id}/reviews?api_key=${KEY}&language=${LANGUAGE}&page=${PAGE}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getMovieReviews;
