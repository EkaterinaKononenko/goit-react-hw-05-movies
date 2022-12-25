import { useLocation, Link } from "react-router-dom";

const MovieItem = ({ id, src, title, vote }) => {
  const pathname = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();

    return (
      <li key={id} title={title}>
        <Link to={`${id}`} state={{ from: location }}></Link>
        <img src={pathname + src} alt={title} width="10" />
        <h1>{title}</h1>
        <p>User score:{vote}</p>
      </li>
    );
}

export default MovieItem;

