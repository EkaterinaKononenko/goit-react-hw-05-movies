import MovieItem from "components/MovieItem/MovieItem";
import PropTypes from 'prop-types';

const MovieSet = ({ movies }) => {

  const defaultPic = './Image/default_picture.jpg';
    const pathname = 'https://image.tmdb.org/t/p/w500';
  
  return (
    <ul>
      {movies.map(({ id, poster_path, title, vote_average }) => {
        const checkPic =
          poster_path !== null ? `${pathname}${poster_path}` : defaultPic;
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

