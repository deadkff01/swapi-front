import { cleanup, screen } from '@testing-library/react';
import '../../setupTests';
import { renderWithRouterParams } from '../../testUtils';
import CharacterDetails from './CharacterDetails';
import '@testing-library/jest-dom/extend-expect';
import { server } from 'mocks/server';

describe('CharacterDetails component', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    jest.useRealTimers();
    server.close();
    cleanup();
  });

  test('renders the component', async () => {
    renderWithRouterParams(<CharacterDetails path="/character/:id" />, {
      route: '/character/2'
    });
    const container = await screen.findByTestId('container');
    expect(container).toMatchSnapshot();
  });

  test('renders the loader', async () => {
    renderWithRouterParams(<CharacterDetails path="/character/:id" />, {
      route: '/character/2'
    });
    const loader = await screen.findByTestId('loader');
    expect(loader).toBeDefined();
  });

  test('renders with valid values', async () => {
    renderWithRouterParams(<CharacterDetails path="/character/:id" />, {
      route: '/character/2'
    });
    const name = await screen.findByText('C-3PO');
    const height = await screen.findByText('Height: 167');
    const mass = await screen.findByText('Mass: 75');
    const gender = await screen.findByText('Gender: n/a');
    const skinColor = await screen.findByText('Skin Color: gold');
    const hairColor = await screen.findByText('Hair Color: n/a');

    expect(name).toBeDefined();
    expect(height).toBeDefined();
    expect(mass).toBeDefined();
    expect(gender).toBeDefined();
    expect(skinColor).toBeDefined();
    expect(hairColor).toBeDefined();
  });

  // test('renders the error message', async () => {
  //   server.use(
  //     rest.get(`${process.env.REACT_APP_ENDPOINT}/movies`, (_, res, ctx) =>
  //     res(ctx.json('ddd'))
  //   )
  //     // rest.get('http://localhost:8080/movies', async (req, res, ctx) => {
  //     //   return res(
  //     //     ctx.status(500),
  //     //     ctx.json({ message: 'Internal Server Error' })
  //     //   );
  //     // })
  //   );
  //   renderWithRouter(<Movies />);
  //   const error = await screen.findByTestId('error-message');
  //   expect(error).toBeDefined();
  // });
});
