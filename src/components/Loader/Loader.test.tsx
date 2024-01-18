import { render } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
});
