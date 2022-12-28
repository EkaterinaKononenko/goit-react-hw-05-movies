
import { NavLink, Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import getMoviesDetails from 'API/getMoviesDetails';
import { useState, useEffect } from 'react';

const MovieDetails = ({
  original_title,
  genres,
  overview,
  poster_path,
  vote_average,
}) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <div>
      <div>
        <button type="button" onClick={onGoBackClick}>
          GO BACK
        </button>
      </div>
      Now showing product with id {id}
      <h1>{original_title}</h1>
      <p>{vote_average}</p>
      <p>{overview}</p>
      <p>{genres}</p>
      <ul>
        <li>
          <NavLink to="cast">CAST</NavLink>
        </li>
        <li>
          <NavLink to="rewievs" >REWIEVS</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;


  


