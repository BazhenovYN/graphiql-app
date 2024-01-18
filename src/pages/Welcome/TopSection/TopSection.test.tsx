import { MemoryRouter } from 'react-router-dom';
import { TopSection } from './TopSection';
import { renderWithProviders } from '@/utils/test-utils';

describe('Welcome page top section tests', () => {
  test('Must render top section subheading', () => {
    const { getByTestId } = renderWithProviders(
      <MemoryRouter>
        <TopSection />
      </MemoryRouter>
    );
    const subHeading = getByTestId('page-subheading');
    expect(subHeading).toBeInTheDocument();
  });
});
