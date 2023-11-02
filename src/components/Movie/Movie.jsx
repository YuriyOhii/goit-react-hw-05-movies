import { Link, useLocation } from 'react-router-dom';
export const Movie = ({ film: { title, id } }) => {
  const location = useLocation();

  return (
    <div>
      <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
    </div>
  );
};
