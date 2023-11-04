import { useState, useEffect } from 'react';
import { Loader } from '../components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { getTrendingFilms } from '../services/api';

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchFilmList = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const films = await getTrendingFilms();
        setMovies(films.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFilmList();
  }, []);

  return (
    <main>
      <MovieList movies={movies} />
      {isLoading && <Loader />}
      {error && (
        <div>
          Something went wrong.. {error.message}. Please, reload the page!
        </div>
      )}
    </main>
  );
}
