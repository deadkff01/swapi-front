import { useEffect, useState, useCallback } from 'react';
import { Container } from 'components/Container';
import { Title } from 'components/Title';
import { useHttpInstance } from 'services/baseService';
import { useParams } from '@reach/router';
import { Loader } from 'components/Loader';
import { ErrorWarning } from 'components/ErrorWarning';
import { Fade } from 'utils/Fade';
import { BackButton } from 'components/BackButton';

export default function CharacterDetails() {
  const [character, setCharacter] = useState({});
  const params = useParams();
  const { get, response, error, loading } = useHttpInstance();

  const getCharacter = useCallback(async () => {
    const people = await get(`people/${params.id}`);
    if (response.ok) setCharacter(people);
  }, [get, response, params.id]);

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

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
        className="flex flex-wrap justify-center "
      >
        <BackButton />
        <div className="w-full text-center px-5 mb-5">
          <Title className="text-4xl" align="center">
            {character.name}
          </Title>

          <div className="flex mb-5 justify-center">
            <div className="text-center text-lg px-5">
              <Title className="text-3xl" align="center">
                Character Details
              </Title>
              <div>Name: {character.name}</div>
              <div>Height: {character.height}</div>
              <div>Mass: {character.mass}</div>
              <div>Gender: {character.gender}</div>
              <div>Skin Color: {character.skin_color}</div>
              <div>Hair Color: {character.hair_color}</div>
            </div>
          </div>
        </div>
      </Container>
    </Fade>
  );
}
