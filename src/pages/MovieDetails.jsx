import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import { Details } from '../components/Details/Details';
export default function MovieDetails() {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const details = await getMovieDetails(Number(movieId));
        setDetails(details);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [movieId]);
  return (
    <main>
      <Link to={backLink}>Back to FilmList</Link>
      {details && <Details movie={details} />}
      {isLoading && <div>LOADING...</div>}
      {error && (
        <div>
          Something went wrong.. {error.message}. Please, reload the page!
        </div>
      )}
      <section>
        <ul>
          <li><Link to={`/movies/${movieId}/cast`}>Cast</Link></li>
          <li><Link to={`/movies/${movieId}/reviews`}>Reviews</Link></li>
        </ul>
      </section>
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
