import { useSearchParams } from 'react-router-dom';

import { HiOutlineSearch } from 'react-icons/hi';
export const SearchForm = () => {
  const [params, setParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    const normalizedQuery = query.toLowerCase().trim();
    params.set('query', normalizedQuery);
    setParams(params);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">
        <HiOutlineSearch />
      </button>
    </form>
  );
};
