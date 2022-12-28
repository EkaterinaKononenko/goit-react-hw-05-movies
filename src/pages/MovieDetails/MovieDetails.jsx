import {
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import getMoviesDetails from 'API/getMoviesDetails';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMoviesDetails(id)
      .then(setMovie)
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!movie) {
    return null;
  }

  const onGoBackClick = () => {
    navigate(location?.state?.from ?? '/');
  };
  const { title, vote_average, overview, genres, poster_path } = movie;
  const vote = Math.round(vote_average);
  const genreSet = genres.map(ganre => ganre.name).join(', ');

  return (
    <div>
      <div>
        <button type="button" onClick={onGoBackClick}>
          GO BACK
        </button>
      </div>
      <div>
        <img src={pathname + poster_path} alt='movie' />
      </div>
      <h1>{title}</h1>
      <p>vote: {vote}</p>
      <p>{overview}</p>
      <p>{genreSet}</p>
      <ul>
        <li>
          <NavLink to="cast">CAST</NavLink>
        </li>
        <li>
          <NavLink to="rewievs">REWIEVS</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

 MovieDetails.propTypes = {
   movie: PropTypes.arrayOf(
     PropTypes.shape({
       id: PropTypes.number.isRequired,
       title: PropTypes.string.isRequired,
       vote: PropTypes.string.isRequired,
       overview: PropTypes.string.isRequired,
       genreSet: PropTypes.string.isRequired,
     })
   ),
 };


    


