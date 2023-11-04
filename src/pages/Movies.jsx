import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { searchMovies } from '../services/api';
export default function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [params] = useSearchParams();
  const query = params.get('query') ?? '';

  useEffect(() => {
    const fetchFilmList = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const films = await searchMovies(query);
        setMovies(films.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFilmList();
  }, [query]);

  return (
    <main>
      <SearchForm />
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
