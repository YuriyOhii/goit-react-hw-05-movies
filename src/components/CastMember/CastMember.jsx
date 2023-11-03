import PropTypes from 'prop-types';
import { Card, Text, Wrap } from './CastMember.styled';
export const CastMember = ({ one: { character, name, profile_path, job } }) => {
  const defaultImg = 'https://via.placeholder.com/200x300';
  return (
    <Card>
      <Wrap>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w200${profile_path}`
              : defaultImg
          }
          alt="Cast member poster. If we have it :)"
        />
      </Wrap>
      <Text>
        <b>{character ?? job}</b>
      </Text>
      <Text>{name}</Text>
    </Card>
  );
};

CastMember.propTypes = {
  one: PropTypes.shape({
    character: PropTypes.string,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
    job: PropTypes.string,
  }),
};
