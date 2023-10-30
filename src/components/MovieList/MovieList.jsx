import { useSearchParams } from 'react-router-dom';
import { Movie } from '../Movie/Movie';
import { useEffect, useState } from 'react';
import { searchMovies, getTrendingFilms } from '../../services/api';

export const MovieList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [params] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = params.get('query') ?? '';

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const films = await getTrendingFilms();
        console.log(films);
        setMovies(films.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    const searchFilms = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const films = await searchMovies(query);
        console.log(films);
        setMovies(films.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query === '') fetchFilms();
    else searchFilms();
  }, [query]);
  return (
    <section>
      <ul>
        {movies.map(el => (
          <li key={el.id}>
            <Movie film={el} />
          </li>
        ))}
      </ul>
      {isLoading && <div>LOADING...</div>}
      {error && (
        <div>
          Something went wrong.. {error.message}. Please, reload the page!
        </div>
      )}
    </section>
  );
};
