import { useLocation, Link } from "react-router-dom";
import PropTypes from 'prop-types';

const MovieItem = ({ id, src, title, vote }) => {
  const pathname = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();

    return (
      <li key={id} title={title}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <img src={pathname + src} alt={title} width="200" />
          <h1>{title}</h1>
        </Link>
        <p>User score:{vote}</p>
      </li>
    );
}

export default MovieItem;

MovieItem.propTypes = {

  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
}


