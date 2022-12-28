
import getMovieCredits from "API/getMovieCredits";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

     

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

         if(!cast){return (<p>Sorry, we don't have any review</p>)}
         
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

     
 