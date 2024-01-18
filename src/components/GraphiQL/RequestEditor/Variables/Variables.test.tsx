import { render } from '@testing-library/react';
import { Variables } from './Variables';

describe('Variables', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<Variables value="" onChange={vi.fn()} />);
    const textbox = getByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });

  test('displays the provided value', () => {
    const value = 'Testing variables';
    const { getByText } = render(<Variables value={value} onChange={vi.fn()} />);
    expect(getByText(value)).toBeInTheDocument();
  });

  test('changes value', () => {
    const newValue = 'New Variables';
    const changeHandler = vi.fn();
    render(<Variables value="" onChange={changeHandler} />);
    changeHandler(newValue);
    expect(changeHandler).toHaveBeenCalledTimes(1);
    expect(changeHandler).toHaveBeenCalledWith(newValue);
  });
});
