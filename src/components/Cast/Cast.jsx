import { CastMember } from 'components/CastMember/CastMember';
import { searchMovieCast } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastCard, List, Title } from './Cast.styled';

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
      <Title>Movie participaters</Title>
      {cast.length > 0 && (
        <>
          <h3>Cast</h3>
          <List>
            {cast.map(member => (
              <CastCard key={member.credit_id}>
                <CastMember one={member} />
              </CastCard>
            ))}
          </List>
        </>
      )}
      {crew.length > 0 && (
        <>
          <h3>Crew</h3>
          <List>
            {crew.map(member => (
              <CastCard key={member.credit_id}>
                <CastMember one={member} />
              </CastCard>
            ))}
          </List>
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
