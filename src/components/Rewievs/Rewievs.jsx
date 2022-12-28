
import getMovieReviews from "API/getMovieReviews";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

     

const Review = () => {
         const { id } = useParams();
         const [reviews, setReview] = useState([])
         
          useEffect(() => {
            getMovieReviews(id)
              .then(response => {
                setReview(response.results);
              }).catch(error => {
                console.log(error);
              })
          }, [id]);

         console.log(reviews);

         if(!reviews){return (<p>Sorry, we don't have any review</p>)}
         
       return (
         <div>
           <p>REVIEWS</p>
           <div>
             {reviews.map(({ id, author, content }) => {
               return (
                 <div key={id}>
                   <ul>
                     <li>{author}</li>
                     <li>{content}</li>
                   </ul>
                 </div>
               );
             })}
           </div>
         </div>
       );
     };

export default Review;
     
    Review.propTypes = {
      reviews: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          author: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired,
        })
      ),
    };
