import { Link, useParams } from 'react-router-dom';
import { List } from './ExtraInfo.styled';

export const ExtraInfo = () => {
  const { movieId } = useParams();
  return (
    <section>
      <List>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </List>
    </section>
  );
};
