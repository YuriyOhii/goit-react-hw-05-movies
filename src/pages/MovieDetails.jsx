import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import { Details } from '../components/Details/Details';
import { BackLink, Icon } from 'assets/Backlink';
import { ExtraInfo } from 'components/ExtraInfo/ExtraInfo';
import { Loader } from 'components/Loader/Loader';
export default function MovieDetails() {
  const [details, setDetails] = useState({});
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
      <BackLink to={backLink}>
        <Icon />
        Back to the filmlist
      </BackLink>
      {details && <Details movie={details} />}
      {isLoading && <Loader />}
      {error && (
        <div>
          Something went wrong.. {error.message}. Please, reload the page!
        </div>
      )}
      <ExtraInfo />
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
