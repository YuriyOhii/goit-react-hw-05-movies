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
