import PropTypes from 'prop-types';
import { Genre, List, Main, Rating, Title } from './Details.styled';

export const Details = ({
  movie: {
    title,
    overview,
    genres = [],
    vote_average,
    vote_count,
    poster_path,
  },
}) => {
  const defaultImg = 'https://via.placeholder.com/300x450';
  return (
    <Main>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : defaultImg
          }
          alt="Movie poster"
        />
      </div>
      <div>
        <Title>{title}</Title>
        <p>
          <b>Overview:</b> {overview}
        </p>
        <h3>Genres:</h3>
        <List>
          {genres.map(el => (
            <Genre key={el.id}>{el.name}</Genre>
          ))}
        </List>
        <Rating>
          <b>Rating: </b>
          {vote_average}. <b>Total votes: </b>
          {vote_count}{' '}
        </Rating>
      </div>
    </Main>
  );
};

Details.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object),
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    poster_path: PropTypes.string,
  }),
};
