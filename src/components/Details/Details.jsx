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
    <main>
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
        <h1>{title}</h1>
        <p>
          <b>Overview:</b> {overview}
        </p>
        <h3>Genres</h3>
        <ul>
          {genres.map(el => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
        <p>
          <b>Rating: </b>
          {vote_average}. <b>Total votes: </b>
          {vote_count}{' '}
        </p>
      </div>
    </main>
  );
};
