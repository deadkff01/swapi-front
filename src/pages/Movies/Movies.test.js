import { cleanup, screen } from '@testing-library/react';
import '../../setupTests';
import { renderWithRouter } from '../../testUtils';
import Movies from './Movies';
import '@testing-library/jest-dom/extend-expect';
import { server } from 'mocks/server';

describe('Movies component', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    jest.useRealTimers();
    server.close();
    cleanup();
  });

  test('renders the component', async () => {
    renderWithRouter(<Movies />);
    const container = await screen.findByTestId('container');
    expect(container).toMatchSnapshot();
  });

  test('renders the loader', async () => {
    renderWithRouter(<Movies />);
    const loader = await screen.findByTestId('loader');
    expect(loader).toBeDefined();
  });

  test('movies count', async () => {
    renderWithRouter(<Movies />);
    const element = await screen.findAllByTestId('movie-card');
    expect(element.length).toBe(6);
  });
});
