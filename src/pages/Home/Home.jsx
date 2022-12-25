
/*import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import getMovieTranding from "API/getMovieTranding";
import MovieSet from "components/MoviesSet/MoviesSet";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log('Here will be request {setMovies}');
    getMovieTranding().then(setMovies);
  }, [setMovies]);


  return (
    <main>
        <div>Trending today</div>
        <MovieSet movies={movies} />
        <Outlet />
    </main>
  );
}

export default Home;*/

    const Home = () => {
       return (
         <main>
           <h1>Welcome</h1>
           <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
             laboriosam placeat incidunt rem illum animi nemo quibusdam quia
             voluptatum voluptate.
           </p>
         </main>
       );
};
     export default Home;