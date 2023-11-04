import { useLocation, useSearchParams } from 'react-router-dom';
import { Movie } from '../Movie/Movie';
import { List, MovieItem, Query, Title } from './MovieList.styled';
export const MovieList = ({ movies }) => {
  const [params] = useSearchParams();
  const query = params.get('query') ?? '';
  const location = useLocation();
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
    </section>
  );
};
