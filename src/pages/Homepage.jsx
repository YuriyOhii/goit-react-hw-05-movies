import { useEffect, useState } from 'react';
import { getTrendingFilms } from '../services/api';
import { MovieList } from 'components/MovieList/MovieList';
export default function Homepage() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const films = await getTrendingFilms();
        console.log(films);
        setFilms(films.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFilms();
  }, []);
  return (
    <main>
      <h1>The most trending films of the week!</h1>
      {films.length > 0 ? (
        <MovieList films={films} />
      ) : (
        <p>Film list is empty. Try to make another request.</p>
      )}
      {isLoading && <div>LOADING...</div>}
      {error && (
        <div>
          Something went wrong.. {error.message}. Please, reload the page!
        </div>
      )}
    </main>
  );
}
