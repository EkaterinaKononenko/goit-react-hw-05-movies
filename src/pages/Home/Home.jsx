
import { useState, useEffect } from "react";
import getMovieTranding from "API/getMovieTranding";
import MovieSet from 'components/MoviesSet/MovieSet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { HomePage, HomepageTitle } from './Home.styled';
import Spinner from "components/Spinner/Spinner";

 

const Home = () => {
  const [movies, setMovies] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieTranding()
      .then(response => {
        if (response.results.length === 0) {
          return toast.warn("We couldn't find result on your request.", {
            position: 'top-right',
            autoClose: 3000,
            theme: 'colored',
          });
        }
        setMovies(response.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      })
  }, []);

  console.log(movies)

  return (
    <main>
      <HomePage>
        <ToastContainer />
        <HomepageTitle>Trending today</HomepageTitle>
        <MovieSet movies={movies} />
      </HomePage>
      {isLoading && <Spinner />}
    </main>
  );
}

export default Home;

  Home.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({})
    ),
  };
