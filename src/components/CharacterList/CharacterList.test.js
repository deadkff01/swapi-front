import { cleanup, screen } from '@testing-library/react';
import { renderWithRouter } from '../../testUtils';
import '../../setupTests';
import CharacterList from './CharacterList';
import { aNewHopeMock } from 'mocks/mockMovies';
import { server } from 'mocks/server';

describe('CharacterList component', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    jest.useRealTimers();
    server.close();
    cleanup();
  });

  test('Renders the component', async () => {
    renderWithRouter(<CharacterList characterList={aNewHopeMock.characters} />);
    const container = await screen.findByTestId('characters-container');
    expect(container).toMatchSnapshot();
  });

  test('load character', async () => {
    renderWithRouter(<CharacterList characterList={aNewHopeMock.characters} />);
    const element = await screen.findAllByTestId('character-card');
    expect(element.length).toBe(3);
  });

  test('load message', async () => {
    renderWithRouter(<CharacterList characterList={aNewHopeMock.characters} />);
    const element = await screen.findByText('Carregando personagens...');
    expect(element).toBeDefined();
  });

  test('has load more button', async () => {
    renderWithRouter(<CharacterList characterList={aNewHopeMock.characters} />);
    const element = await screen.findByTestId('load-more-button');
    expect(element).toBeDefined();
  });
});
