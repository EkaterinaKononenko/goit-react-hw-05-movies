import MovieItem from "components/MovieItem/MovieItem";

const MovieSet = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie ) => {
        return (
          <MovieItem
            key={movie.id}
            id={movie.id}
            src={movie.poster_path}
            title={movie.title}
            vote={movie.vote_average}
          >
            {movie.title}
          </MovieItem>
        );
      })}
    </ul>
  );
};



export default MovieSet;

