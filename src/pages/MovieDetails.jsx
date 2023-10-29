import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getFilmDetails } from '../services/api';
import { Details } from '../components/Details/Details';
export default function MovieDetails() {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const details = await getFilmDetails(Number(movieId));
        console.log(details);
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
      {details && <Details movie={details} />}
      {isLoading && <div>LOADING...</div>}
      {error && (
        <div>
          Something went wrong.. {error.message}. Please, reload the page!
        </div>
      )}

      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
