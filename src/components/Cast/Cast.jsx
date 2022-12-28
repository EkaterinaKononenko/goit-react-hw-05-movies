
import getMovieCredits from 'API/getMovieReviews';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

     

const Cast = () => {
        const { id } = useParams();
         const [actors, setCast] = useState([]);
         
          useEffect(() => {
            getMovieCredits(id)
              .then(response => setCast(response.cast))
              .catch(error => {
                console.log(error);
              });
          }, [id]);

          console.log(actors);
         if (!actors) {
           return <p>Sorry, we don't have any information</p>;
         }
         
       return (
         <div>
           <p>ACTORS</p>
           <ul>
             {actors.map(({ id, caracter, name, imgUrl }) => {
               return (
                 <li key={id}>
                   <h2>{caracter}</h2>
                   <p>{name}</p>
                   <img src={imgUrl} alt="actor" />
                 </li>
               );
             })}
           </ul>
         </div>
       );
     };

export default Cast;
     
 