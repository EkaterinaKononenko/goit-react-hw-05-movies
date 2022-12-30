
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
import { ToastContainer, toast } from 'react-toastify';


     

const Cast = () => {
         const { id } = useParams();
         const [cast, setCast] = useState([])
  const pathname = 'https://image.tmdb.org/t/p/w500';
         
          useEffect(() => {
            getMovieCredits(id)
              .then(response => {
                setCast(response.cast);
                if (response.cast.length === 0) {
                  return toast.info("Sorry, we don't have any informations.", {
                    position: 'top-right',
                    autoClose: 3000,
                    theme: 'colored',
                  });
                }
              })
              .catch(error => {
                console.log(error);
              });
          }, [id]);

         console.log(cast);
  
         
       return (
         <div>
           <ToastContainer />
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

 