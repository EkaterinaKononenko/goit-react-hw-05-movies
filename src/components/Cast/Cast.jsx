
import getMovieCredits from "API/getMovieCredits";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import {
  ActorName,
  ActorImg,
  ActorCard,
  ActorsWrap,
} from './Cast.styled';
import defaultPhoto from 'Image/default_photo.png';

     

const Cast = () => {
         const { id } = useParams();
         const [cast, setCast] = useState([])
  const pathname = 'https://image.tmdb.org/t/p/w500';
         
          useEffect(() => {
            getMovieCredits(id)
              .then(response => {
                setCast(response.cast);
              })
              .catch(error => {
                console.log(error);
              });
          }, [id]);

         console.log(cast);

         if(!cast){return (<p>Sorry, we don't have any informations</p>)}
         
       return (
         <div>
           <ActorsWrap>
             {cast.map(({ id, name, profile_path }) => {
               const checkPhoto = profile_path 
                 ? `${pathname}${profile_path}`
                 : defaultPhoto;
               return (
                 <ActorCard key={id}>
                   <ActorImg src={checkPhoto} alt="actor" />
                   <ActorName>{name}</ActorName>
                 </ActorCard>
               );
             })}
           </ActorsWrap>
         </div>
       );
     };

     export default Cast;

     Cast.propTypes = {
       cast: PropTypes.arrayOf(
         PropTypes.shape({
           id: PropTypes.number.isRequired,
           name: PropTypes.string.isRequired,
           profile_path: PropTypes.string.isRequired,
         })
       ),
     };

 