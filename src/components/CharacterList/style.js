import styled from 'styled-components';
import { Link } from '@reach/router';
import { Title } from 'components/Title';

export const ButtonLoadMore = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid;
  border-radius: 5px;
  padding: 8px;
  transition: all 0.5s ease;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

export const CharacterCardStyle = styled.div`
  font-weight: 600;
  &:hover {
    ${Title} {
      color: #d5d84b;
      text-decoration: underline;
    }
  }
`;

export function CharacterCard({ character }) {
  return (
    <CharacterCardStyle
      className="mt-5 md:w-full lg:w-1/3"
      data-testid="character-card"
    >
      <Link to={`/character/${character.url.split('/')[5]}`}>
        <Title className="text-2xl">{character.name}</Title>
      </Link>
    </CharacterCardStyle>
  );
}
