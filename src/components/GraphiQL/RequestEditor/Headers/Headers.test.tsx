import { render } from '@testing-library/react';
import { Headers } from './Headers';

describe('Headers', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<Headers value="" onChange={vi.fn()} />);
    const textbox = getByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });

  test('displays the provided value', () => {
    const value = 'Testing headers';
    const { getByText } = render(<Headers value={value} onChange={vi.fn()} />);
    expect(getByText(value)).toBeInTheDocument();
  });

  test('changes value', () => {
    const newValue = 'New Headers';
    const changeHandler = vi.fn();
    render(<Headers value="" onChange={changeHandler} />);
    changeHandler(newValue);
    expect(changeHandler).toHaveBeenCalledTimes(1);
    expect(changeHandler).toHaveBeenCalledWith(newValue);
  });
});
