import MovieItem from "components/MovieItem/MovieItem";
import PropTypes from 'prop-types';

const MovieSet = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, poster_path, title, vote_average }) => {
        return (
          <MovieItem
            key={id}
            id={id}
            src={poster_path}
            title={title}
            vote={vote_average}
          >
            {title}
          </MovieItem>
        );
      })}
    </ul>
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

