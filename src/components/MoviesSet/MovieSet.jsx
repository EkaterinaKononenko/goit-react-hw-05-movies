import MovieItem from "components/MovieItem/MovieItem";
import PropTypes from 'prop-types';
import defaultPic from 'Image/default_picture.jpg';
import { MovieList } from "./MovieSet.styled";


const MovieSet = ({ movies }) => {
  const pathname = 'https://image.tmdb.org/t/p/w500';
  
  return (
    <MovieList>
      {movies.map(({ id, poster_path, title, vote_average }) => {
        const checkPic = poster_path ? `${pathname}${poster_path}` : defaultPic;
        return (
          <MovieItem
            key={id}
            id={id}
            src={checkPic}
            title={title}
            vote={vote_average}
          >
            {title}
          </MovieItem>
        );
      })}
    </MovieList>
  );
};

  MovieSet.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
      })
    ),
  };


export default MovieSet;

