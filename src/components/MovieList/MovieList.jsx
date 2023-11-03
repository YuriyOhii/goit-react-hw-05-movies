import { useLocation, useSearchParams } from 'react-router-dom';
import { Movie } from '../Movie/Movie';
import { useEffect, useState } from 'react';
import { searchMovies, getTrendingFilms } from '../../services/api';
import { List, MovieItem, Query, Title } from './MovieList.styled';

export const MovieList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [params] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = params.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    const fetchFilmList = async () => {
      try {
        if (query === '' && location.pathname !== '/') return;
        let films = [];
        setIsLoading(true);
        setError(null);
        if (location.pathname === '/') {
          films = await getTrendingFilms();
        } else {
          films = await searchMovies(query);
        }
        setMovies(films.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFilmList();
  }, [query, location]);
  return (
    <section>
      {movies.length > 0 ? (
        location.pathname === '/' ? (
          <Title>The most trending films of the day!</Title>
        ) : (
          <Title>
            Here we are! Films for your request: <Query>{query}</Query>
          </Title>
        )
      ) : null}
      <List>
        {movies.map(el => (
          <MovieItem key={el.id}>
            <Movie film={el} />
          </MovieItem>
        ))}
      </List>
      {isLoading && <div>LOADING...</div>}
      {error && (
        <div>
          Something went wrong.. {error.message}. Please, reload the page!
        </div>
      )}
    </section>
  );
};
