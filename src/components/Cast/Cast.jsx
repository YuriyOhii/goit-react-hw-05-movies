import { CastMember } from 'components/CastMember/CastMember';
import { searchMovieCast } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const details = await searchMovieCast(Number(movieId));
        setCast(details.cast);
        setCrew(details.crew);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [movieId]);

  return (
    <section>
      <h2>Movie participaters</h2>
      {cast.length > 0 && (
        <>
          <h3>Cast</h3>
          <ul>
            {cast.map(member => (
              <li key={member.credit_id}>
                <CastMember one={member} />
              </li>
            ))}
          </ul>
        </>
      )}
      {crew.length > 0 && (
        <>
          <h3>Crew</h3>
          <ul>
            {crew.map(member => (
              <li key={member.credit_id}>
                <CastMember one={member} />
              </li>
            ))}
          </ul>
        </>
      )}
      {isLoading && <div>LOADING...</div>}
      {error && (
        <div>
          Something went wrong.. {error.message}. Please, reload the page!
        </div>
      )}
    </section>
  );
}
