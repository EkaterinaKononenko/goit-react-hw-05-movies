
import { useState, useEffect } from 'react';
import {useSearchParams } from 'react-router-dom';
import getSearchMovies from 'API/getSearchMovies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams([]);

  console.log(movies);

  
  useEffect(() => {
    if (searchParams.get('searchMovie') === null) {
      return;
    }
    const searchRes = searchParams.get('searchMovie');
    getSearchMovies(searchRes).then(response => {
      if (response.results.length === 0) {
        return toast.warn("We couldn't find result on your request.", {
          position: 'top-right',
          autoClose: 3000,
          theme: 'colored',
        });
      } setMovies(response.results);
    }).catch(error => {
      console.log(error);
    })
  }, [query, searchParams])

   const handleChange = e => {
     setQuery(e.currentTarget.value.toLowerCase());
   };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.error(
        'Field for searching is empty. Add information for request.',
        {
          position: 'top-right',
          autoClose: 3000,
          theme: 'colored',
        }
      );
    }
    setSearchParams({ searchMovie:query });
    setQuery('');
  };


  return (
    <div>
      <ToastContainer />
      <div>Movies</div>
      <form onSubmit={handleSubmit}>
        <label>
          Search movie is here
          <input
            type="text"
            placeholder="Search your favorite movie"
            name="searchMovie"
            value={query}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
      }

export default Movies;

/*const Movies = () => {
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

export default Movies;*/