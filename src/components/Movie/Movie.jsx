import { useLocation } from 'react-router-dom';
import { Card, Reference, Title, Wrap } from './Movie.styled';
import PropTypes from 'prop-types';

export const Movie = ({ film: { title, id, poster_path } }) => {
  const location = useLocation();
  const defaultImg = 'https://via.placeholder.com/200x300';

  return (
    <div>
      <Reference to={`/movies/${id}`} state={{ from: location }}>
        <Card>
          <Wrap>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w200${poster_path}`
                  : defaultImg
              }
              alt="Movie poster"
            />
          </Wrap>
          <Title>{title}</Title>
        </Card>
      </Reference>
    </div>
  );
};

Movie.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
  }),
};
