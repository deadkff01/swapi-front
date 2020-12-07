import { useEffect, useState, useCallback } from 'react';
import { Container } from 'components/Container';
import { Title } from 'components/Title';
import { PosterImage } from 'components/PosterImage';
import { useHttpInstance } from 'services/baseService';
import { useParams } from '@reach/router';
import { CharacterList } from 'components/CharacterList';
import { Loader } from 'components/Loader';
import { ErrorWarning } from 'components/ErrorWarning';
import { Fade } from 'utils/Fade';
import { BackButton } from 'components/BackButton';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const { get, response, error, loading } = useHttpInstance();

  const getMovie = useCallback(async () => {
    const movie = await get(`movies/${params.id}`);
    if (response.ok) setMovie(movie);
  }, [get, response, params.id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorWarning message="Error, verify your conection or reload the page! may the force be with you!" />
    );
  }

  return (
    <Fade in={true} unmountOnExit appear>
      <Container
        data-testid="container"
        className="flex flex-wrap justify-center"
      >
        <BackButton />
        <div className="w-full text-center px-5 mb-5">
          <Title className="text-4xl" align="center">
            {movie.title}
          </Title>
          <PosterImage className={`movie-image-${movie.episode_id} mx-auto`} />
        </div>
        <div className="lg:flex ">
          <div className="md:w-full lg:w-2/4 text-left text-lg px-5 mb-10">
            <Title className="text-3xl" align="left">
              Opening Crawl
            </Title>
            <div>{movie.opening_crawl}</div>
          </div>
          <div className="md:w-full lg:w-2/4 text-left px-5  text-lg  mb-10">
            <Title className="text-3xl" align="left">
              Informations
            </Title>
            <div>Director: {movie.director}</div>
            <div>Producer: {movie.producer}</div>
            <div>Release date: {movie.release_date}</div>
          </div>
        </div>

        {movie?.characters?.length > 0 ? (
          <CharacterList characterList={movie.characters} />
        ) : null}
      </Container>
    </Fade>
  );
}
