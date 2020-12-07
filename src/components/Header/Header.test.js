import { cleanup } from '@testing-library/react';
import { renderWithRouter } from '../../testUtils';
import '../../setupTests';
import Header from './Header';

describe('Header component', () => {
  afterEach(() => {
    cleanup();
  });

  test('Renders the component', async () => {
    const { container } = renderWithRouter(<Header />);

    expect(container).toMatchSnapshot();
  });
});
