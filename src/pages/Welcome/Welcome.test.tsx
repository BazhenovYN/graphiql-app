import { MemoryRouter } from 'react-router-dom';
import { Welcome } from './Welcome';
import { renderWithProviders } from '@/utils/test-utils';

describe('Welcome page tests', () => {
  test('Must contain correct welcome page title', () => {
    const { getByTestId } = renderWithProviders(
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>
    );
    const heading = getByTestId('page-title');
    expect(heading).toBeInTheDocument();
  });
});
