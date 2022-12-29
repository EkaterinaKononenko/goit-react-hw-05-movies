import { useLocation, Link } from "react-router-dom";
import PropTypes from 'prop-types';

const MovieItem = ({ id, checkPic, title, vote }) => {
  const location = useLocation();

  return (
    <li key={id} title={title}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img src={checkPic} alt={title} width="200" />
        <h1>{title}</h1>
      </Link>
      <p>User score: &#11088; {vote}</p>
    </li>
  );
};

export default MovieItem;

MovieItem.propTypes = {

  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
}


