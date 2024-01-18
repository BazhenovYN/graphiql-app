import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TeamSection } from './TeamSection';

describe('Team Section tests', () => {
  test('Must contain correct section title', () => {
    const { getByTestId } = render(<TeamSection />, { wrapper: MemoryRouter });
    const heading = getByTestId('team-section-heading');

    expect(heading).toBeInTheDocument();
  });
});
