
import getMovieReviews from "API/getMovieReviews";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import {
  RewievsAuthor,
  RewievsContent,
  RewievsCard,
} from './Rewievs.styled';
import { ToastContainer, toast } from 'react-toastify';

     

const Review = () => {
  const { id } = useParams();
  const [reviews, setReview] = useState([])

         
          useEffect(() => {
            getMovieReviews(id)
              .then(response => {
                setReview(response.results);  
                if (response.results.length === 0) {
                 return toast.info("Sorry, we don't have any review.", {
                    position: 'top-right',
                    autoClose: 3000,
                    theme: 'colored',
                  });
                }
              }).catch(error => {
                console.log(error);
              })
          }, [id]);

         console.log(reviews);
            
                    
         
       return (
         <div>
           <ToastContainer />
           <div>
             {reviews.map(({ id, author, content }) => {
               return (
                 <div key={id}>
                   <RewievsCard>
                     <RewievsAuthor>{author}</RewievsAuthor>
                     <RewievsContent>{content}</RewievsContent>
                   </RewievsCard>
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
