import PropTypes from 'prop-types';
import { Card, Wrap } from './ReviewItem.styled';

export const ReviewItem = ({ review: { author, content, updated_at } }) => {
  const date = new Date(updated_at);
  return (
    <Card>
      <Wrap>
        <p>
          <b>Author: </b>
          {author}
        </p>
        <p>
          <b>Date: </b>
          {date.toDateString()}
        </p>
      </Wrap>
      <p>{content}</p>
    </Card>
  );
};
ReviewItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
  }),
};
