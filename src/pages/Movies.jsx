import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';

export default function Movies() {
  return (
    <main>
      <SearchForm />
      <MovieList />
    </main>
  );
}
