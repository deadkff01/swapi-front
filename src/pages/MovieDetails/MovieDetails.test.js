import { cleanup, screen } from '@testing-library/react';
import '../../setupTests';
import { renderWithRouterParams } from '../../testUtils';
import MovieDetails from './MovieDetails';
import '@testing-library/jest-dom/extend-expect';
import { server } from 'mocks/server';

describe('MovieDetails component', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    jest.useRealTimers();
    server.close();
    cleanup();
  });

  test('renders the component', async () => {
    renderWithRouterParams(<MovieDetails path="/movie/:id" />, {
      route: '/movie/1'
    });
    const container = await screen.findByTestId('container');
    expect(container).toMatchSnapshot();
  });

  test('renders the loader', async () => {
    renderWithRouterParams(<MovieDetails path="/movie/:id" />, {
      route: '/movie/1'
    });
    const loader = await screen.findByTestId('loader');
    expect(loader).toBeDefined();
  });

  test('renders with valid values', async () => {
    renderWithRouterParams(<MovieDetails path="/movie/:id" />, {
      route: '/movie/1'
    });

    const title = await screen.findByText('A New Hope');
    const director = await screen.findByText('Director: George Lucas');
    const producer = await screen.findByText(
      'Producer: Gary Kurtz, Rick McCallum'
    );
    const releaseDate = await screen.findByText('Release date: 1977-05-25');

    expect(title).toBeDefined();
    expect(director).toBeDefined();
    expect(producer).toBeDefined();
    expect(releaseDate).toBeDefined();
  });
});
