import { useEffect, useState, useCallback } from 'react';
import { Container } from 'components/Container';
import { MovieCard } from 'components/MovieCard';
import { useHttpInstance } from 'services/baseService';
import { Loader } from 'components/Loader';
import { Fade } from 'utils/Fade';
import { ErrorWarning } from 'components/ErrorWarning';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const { get, error, response, loading } = useHttpInstance();

  const getAllMovies = useCallback(async () => {
    const movies = await get('movies');
    if (response.ok) setMovies(movies);
  }, [get, response]);

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorWarning message="Error, verify your conection or reload the page! may the force be with you!" />
    );
  }

  return (
    <Fade in={true} appear>
      <Container
        data-testid="container"
        className="flex flex-wrap justify-center mb-10"
      >
        {movies.map((m, index) => (
          <MovieCard key={index} movieInfo={m} index={index + 1} />
        ))}
      </Container>
    </Fade>
  );
}
