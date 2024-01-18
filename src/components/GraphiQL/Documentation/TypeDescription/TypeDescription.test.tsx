import { render } from '@testing-library/react';

import { objectType } from '@/mocks/graphql';
import { TypeDescription } from './TypeDescription';

describe('TypeDescription', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<TypeDescription type={objectType} onSelectType={vi.fn()} />);
    const typeDescription = getByTestId('type-description');
    expect(typeDescription).toBeInTheDocument();
  });

  test('show type name', () => {
    const { getByText } = render(<TypeDescription type={objectType} onSelectType={vi.fn()} />);
    const typeName = getByText(objectType.name!);
    expect(typeName).toBeInTheDocument();
  });

  test('show type description', () => {
    const { getByText } = render(<TypeDescription type={objectType} onSelectType={vi.fn()} />);
    const typeDescription = getByText(objectType.description!);
    expect(typeDescription).toBeInTheDocument();
  });

  test('show type fields', () => {
    const { getByTestId } = render(<TypeDescription type={objectType} onSelectType={vi.fn()} />);
    const fields = getByTestId('type-fields');
    expect(fields).toBeInTheDocument();
  });

  test('show type input fields', () => {
    const { getByTestId } = render(<TypeDescription type={objectType} onSelectType={vi.fn()} />);
    const inputFields = getByTestId('type-input-fields');
    expect(inputFields).toBeInTheDocument();
  });

  test('show enum fields', () => {
    const { getByTestId } = render(<TypeDescription type={objectType} onSelectType={vi.fn()} />);
    const enums = getByTestId('type-enum-fields');
    expect(enums).toBeInTheDocument();
  });
});
