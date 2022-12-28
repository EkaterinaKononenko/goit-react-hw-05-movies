
import getMovieCredits from "API/getMovieCredits";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

     

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
           <p>ACTORS</p>
           <ul>
             {cast.map(({ id, caracter, name, profile_path }) => {
               return (
                 <li key={id}>
                   <h2>{caracter}</h2>
                   <p>{name}</p>
                   <img src={pathname + profile_path} alt="actor" />
                 </li>
               );
             })}
           </ul>
         </div>
       );
     };

     export default Cast;

     Cast.propTypes = {
       cast: PropTypes.arrayOf(
         PropTypes.shape({
           id: PropTypes.number.isRequired,
           caracter: PropTypes.string.isRequired,
           name: PropTypes.string.isRequired,
           profile_path: PropTypes.string.isRequired,
         })
       ),
     };

 