import axios from 'axios';

const URL = 'https://api.themoviedb.org/';
const KEY = 'd912e4e6ac5ac1e34c6318ab6e2c9716';

const getMoviesDetails = async id => {
  try {
    const response = await axios.get(`${URL}3/movie/${id}?api_key=${KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getMoviesDetails;
