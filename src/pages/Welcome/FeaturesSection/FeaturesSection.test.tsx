import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { FeaturesSection } from './FeaturesSection';

describe('Features Section tests', () => {
  test('Must render feature cards', () => {
    const { getByTestId } = render(<FeaturesSection />, { wrapper: MemoryRouter });
    const card = getByTestId('feature-card2');

    expect(card).toBeInTheDocument();
  });
});
