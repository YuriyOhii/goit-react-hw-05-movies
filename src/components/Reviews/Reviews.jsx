import {} from '../ReviewItem/ReviewItem';
import { searchMovieReviews } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //     const fetchDetails = async () => {
  //       try {
  //         setIsLoading(true);
  //         setError(null);
  //         const details = await searchMovieReviews(Number(movieId));
  //         setReviews(reviews)
  //       } catch (error) {
  //         setError(error);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };
  //     fetchDetails();
  //   }, [movieId]);
  return <div>Reviews</div>;
}
