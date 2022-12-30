import {
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import getMoviesDetails from 'API/getMoviesDetails';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BtnBack,
  MovieDetailsImg,
  MovieDetailsTitle,
  MovieDetailsWrap,
  MovieDetailsText,
  NavItem,
  NavLinkWrap,
  NavLinkBlock,
} from './MovieDetails.styled';
import defaultPic from 'Image/default_picture.jpg';
import Spinner from 'components/Spinner/Spinner';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    setIsLoading(true);
    getMoviesDetails(id)
      .then(setMovie).then(setIsLoading(false))
      .catch(error => {
        console.log(error);
        setIsLoading(false);
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
   const checkPic = poster_path ? `${pathname}${poster_path}` : defaultPic;

  return (
    <div>
      <div>
        <BtnBack type="button" onClick={onGoBackClick}>
          &#11013; GO BACK
        </BtnBack>
      </div>
      <MovieDetailsWrap>
        <MovieDetailsImg>
          <img src={checkPic} alt="movie" width="400px" heigth=""/>
        </MovieDetailsImg>
        <MovieDetailsText>
          <MovieDetailsTitle>{title}</MovieDetailsTitle>
          <p>User score: &#11088; {vote}</p>
          <p>{overview}</p>
          <p>{genreSet}</p>
          <NavLinkBlock>
            <NavLinkWrap>
              <NavItem to="cast">&#127871; CAST</NavItem>
            </NavLinkWrap>
            <NavLinkWrap>
              <NavItem to="rewievs">&#127871; REWIEVS</NavItem>
            </NavLinkWrap>
          </NavLinkBlock>
        </MovieDetailsText>
      </MovieDetailsWrap>
     {isLoading && <Spinner/>}
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


    


