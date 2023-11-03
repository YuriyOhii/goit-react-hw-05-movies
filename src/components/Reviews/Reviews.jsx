import { ReviewItem } from '../ReviewItem/ReviewItem';
import { searchMovieReviews } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Li, Notification, Title } from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const details = await searchMovieReviews(Number(movieId));
        setReviews(details.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [movieId]);
  return (
    <section>
      <Title>Movie reviews</Title>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <Li key={review.id}>
              <ReviewItem review={review} />
            </Li>
          ))}
        </ul>
      ) : (
        <Notification>There is no reviews here!</Notification>
      )}
      {isLoading && <div>LOADING...</div>}
      {error && (
        <div>
          Something went wrong.. {error.message}. Please, reload the page!
        </div>
      )}
    </section>
  );
}
