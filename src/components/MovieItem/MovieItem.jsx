import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import {
  MovieItemCard,
  MovieItemTitle,
  MovieItemScore,
  MovieItemLink,
} from './MovieItem.styled';


const MovieItem = ({ id, src, title, vote }) => {
  const location = useLocation();

  return (
    <MovieItemCard key={id} title={title}>
      <MovieItemLink to={`/movies/${id}`} state={{ from: location }}>
        <img src={src} alt={title} width="250" height="350" />
        <MovieItemTitle>{title}</MovieItemTitle>
      </MovieItemLink>
      <MovieItemScore>User score: &#11088; {Math.round(vote)}</MovieItemScore>
    </MovieItemCard>
  );
};

export default MovieItem;

MovieItem.propTypes = {

  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
}


