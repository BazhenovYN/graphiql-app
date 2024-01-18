import { render } from '@testing-library/react';
import { ResponseViewer } from './ResponseViewer';

describe('ResponseViewer', () => {
  test('renders correctly', () => {
    const value = 'Testing response';
    const { getByRole } = render(<ResponseViewer value={value} />);
    const textbox = getByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });

  test('displays the provided value', () => {
    const value = 'Testing response';
    const { getByText } = render(<ResponseViewer value={value} />);
    const displayValue = getByText('Testing response');
    expect(displayValue).toBeInTheDocument();
  });
});
