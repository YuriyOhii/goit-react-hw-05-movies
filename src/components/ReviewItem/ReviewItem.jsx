export const ReviewItem = ({ review: { author, content, updated_at } }) => {
  const date = new Date(updated_at)
  return (
    <div>
      <div>
        <p>
          <b>Author: </b>
          {author}
        </p>
        <p>
          <b>Date: </b>
          {date.toDateString()}
        </p>
      </div>
      <p>{content}</p>
    </div>
  );
};
