import { useEffect, useState, useCallback } from 'react';
import { useHttpInstance } from 'services/baseService';
import { Title } from 'components/Title';
import { ButtonLoadMore, CharacterCard } from './style';
import { ErrorWarning } from 'components/ErrorWarning';

export default function CharacterList({ characterList }) {
  const { post, response, error, loading } = useHttpInstance();
  const [peopleList, setPeopleList] = useState([]);
  const [lastIndex, setLastIndex] = useState(0);

  const getPeople = useCallback(async () => {
    const people = await post('people', {
      peopleArray: characterList,
      lastIndex: 0
    });
    if (response.ok) {
      setPeopleList(people);
      setLastIndex(getLastFromSliced(characterList, 0));
    }
  }, [post, response, characterList]);

  useEffect(() => {
    getPeople();
  }, [getPeople]);

  const isTheLast = () => characterList.length === lastIndex;

  const getLastFromSliced = (list, i) => {
    const sliced = list.slice(i, i + 3);
    const last = sliced[sliced.length - 1];
    return list.findIndex((l) => l === last) + 1;
  };

  const loadMorePeople = async () => {
    const body = {
      peopleArray: characterList,
      lastIndex
    };

    const getCurrentLast = getLastFromSliced(characterList, lastIndex);
    if (isTheLast()) {
      return;
    }
    setLastIndex(getCurrentLast);
    const people = await post('people', body);
    if (response.ok) {
      setPeopleList((p) => [...p, ...people]);
    }
  };

  if (error) {
    return <ErrorWarning message="Unable to load characters" />;
  }

  return (
    <div className="w-full mb-16" data-testid="characters-container">
      <Title className="px-5 text-3xl" align="left">
        Characters
      </Title>
      <div className="lg:flex flex-wrap justify-center mb-10">
        {peopleList.map((p, index) => (
          <CharacterCard key={index} character={p} />
        ))}
      </div>
      {loading ? (
        <Title className="text-md">Carregando personagens...</Title>
      ) : null}
      {!isTheLast() ? (
        <div className="flex justify-center">
          <ButtonLoadMore
            data-testid="load-more-button"
            onClick={loadMorePeople}
          >
            load more
          </ButtonLoadMore>
        </div>
      ) : null}
    </div>
  );
}
