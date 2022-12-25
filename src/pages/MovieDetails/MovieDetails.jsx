/*
import { NavLink, Outlet, useParams } from 'react-router-dom';
import getMoviesDetails from 'API/getMoviesDetails';


const MovieDetails = ({
  original_title,
  genres,
  overview,
  poster_path,
  popularity,
  vote_average,
}) => {
  const { id } = useParams();
  const movie = getMoviesDetails(id);
  return (
    <div>
      Now showing product with id {movie.name} - {id}
      <ul>
        <li>
          <NavLink to="cast">Read about cast</NavLink>
        </li>
        <li>
          <NavLink to="rewiews">Get to know the team</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;*/