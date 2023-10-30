import { Link } from 'react-router-dom';
export const Movie = ({ film: { title, id } }) => {
  return (
    <div>
      <Link to={`/movies/${id}`}>{title}</Link>
    </div>
  );
};
