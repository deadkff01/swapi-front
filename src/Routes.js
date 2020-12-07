import { Router } from '@reach/router';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import CharacterDetails from 'pages/CharacterDetails';

export default function Routes() {
  return (
    <Router>
      <Movies path="/" default />
      <MovieDetails path="/movie/:id" />
      <CharacterDetails path="/character/:id" />
    </Router>
  );
}
