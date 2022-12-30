
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
import Spinner from "components/Spinner/Spinner";

     

const Review = () => {
  const { id } = useParams();
  const [reviews, setReview] = useState([])
  const [isLoading, setIsLoading] = useState(false);
         
  useEffect(() => {
    setIsLoading(true);
            getMovieReviews(id)
              .then(response => {
                setIsLoading(false);
                if (response.results.length === 0) {
                  return toast.info("Sorry, we don't have any review.", {
                    position: 'top-right',
                    autoClose: 3000,
                    theme: 'colored',
                  });
                }
                setReview(response.results);
              })
              .catch(error => {
                console.log(error);
                setIsLoading(false);
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
           {isLoading && <Spinner />}
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
