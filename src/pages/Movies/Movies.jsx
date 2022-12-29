
import { useState, useEffect } from 'react';
import {useSearchParams } from 'react-router-dom';
import getSearchMovies from 'API/getSearchMovies';
import { ToastContainer, toast } from 'react-toastify';
import MovieSet from 'components/MoviesSet/MovieSet';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FormWrap, Input, Label, BtnSearch } from './Movies.styled';

 

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams([]);

  console.log(movies);

  
  useEffect(() => {
    if (searchParams.get('searchMovie') === null) {
      return;
    }
    const searchRes = searchParams.get('searchMovie');
    getSearchMovies(searchRes)
      .then(response => {
        if (response.results.length === 0) {
          return toast.warn("We couldn't find result on your request.", {
            position: 'top-right',
            autoClose: 3000,
            theme: 'colored',
          });
        }
        setMovies(response.results);
      })
      .catch(error => {
        console.log(error);
      });
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
      <Formik>
        <FormWrap onSubmit={handleSubmit}>
          <Label>
            <Input
              type="text"
              placeholder="Search your favorite movie"
              name="searchMovie"
              value={query}
              onChange={handleChange}
            ></Input>
          </Label>
          <BtnSearch type="submit">Search</BtnSearch>
        </FormWrap>
      </Formik>
      <MovieSet movies={movies} />
    </div>
  );
      }

export default Movies;

 Movies.propTypes = {
   movies: PropTypes.arrayOf(PropTypes.shape({})),
 };
