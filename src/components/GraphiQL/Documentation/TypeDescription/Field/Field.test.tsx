import { render } from '@testing-library/react';

import { countriesField, nameField } from '@/mocks/graphql';
import { Field } from './Field';

describe('Field', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<Field data={countriesField} onSelectType={vi.fn()} />);
    const field = getByTestId('field');
    expect(field).toBeInTheDocument();
  });

  test('renders correctly with arguments', () => {
    const { getByTestId } = render(<Field data={nameField} onSelectType={vi.fn()} />);
    const field = getByTestId('field');
    expect(field).toBeInTheDocument();
  });

  test('show field name', () => {
    const { getByText } = render(<Field data={countriesField} onSelectType={vi.fn()} />);
    const fieldName = getByText(countriesField.name);
    expect(fieldName).toBeInTheDocument();
  });

  test('show field description', () => {
    const { getByText } = render(<Field data={countriesField} onSelectType={vi.fn()} />);
    const fieldDescription = getByText(countriesField.description!);
    expect(fieldDescription).toBeInTheDocument();
  });
});
