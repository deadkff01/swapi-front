import styled from 'styled-components';
import { Link } from '@reach/router';
import { PosterImage } from 'components/PosterImage';
import { Title } from 'components/Title';

const CardStyle = styled.div`
  color: #fff;
  background-color: transparent;
  font-weight: 600;
  width: 220px;
  margin: 13px 33px;
  cursor: pointer;

  &:hover {
    ${Title} {
      color: #d5d84b;
    }
  }
`;

export default function MovieCard({ movieInfo, index }) {
  return (
    <CardStyle className="mt-5" data-testid="movie-card">
      <Link to={`/movie/${index}`}>
        <PosterImage className={`movie-image-${movieInfo.episode_id}`} />
        <Title className="text-2xl">{movieInfo.title}</Title>
      </Link>
    </CardStyle>
  );
}
