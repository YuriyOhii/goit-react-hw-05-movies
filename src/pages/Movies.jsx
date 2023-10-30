import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [params, setParams] = useSearchParams();
  
  const getQuery = value => {
    const normalizedQuery = value.toLowerCase().trim();
    params.set('query', normalizedQuery);
    setParams(params);
  };

  

    return (
    <main>
      <SearchForm onSubmit={getQuery} />
      <MovieList/>
    </main>
  );
}
