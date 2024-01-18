import { fireEvent, render } from '@testing-library/react';

import {
  codeField,
  countriesField,
  languageField,
  nameField,
  objectType,
  scalarType,
} from '@/mocks/graphql';
import { TypeName } from './TypeName';

describe('TypeName', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<TypeName type={objectType} onSelectType={vi.fn()} />);
    const typeName = getByTestId('type-name');
    expect(typeName).toBeInTheDocument();
  });

  test('scalar type renders correctly', () => {
    const { getByText } = render(<TypeName type={scalarType} onSelectType={vi.fn()} />);
    const typeName = getByText(scalarType.name!);
    expect(typeName).toBeInTheDocument();
  });

  test('object type renders correctly', () => {
    const { getByText } = render(<TypeName type={objectType} onSelectType={vi.fn()} />);
    const typeName = getByText(objectType.name!);
    expect(typeName).toBeInTheDocument();
  });

  test('`[Language]!` type renders correctly', () => {
    const { getByText } = render(<TypeName type={languageField.type} onSelectType={vi.fn()} />);
    const typeName = getByText('Language');
    const leftPart = getByText(/\[/i);
    const rightPart = getByText(/]!/i);
    expect(typeName).toBeInTheDocument();
    expect(leftPart).toBeInTheDocument();
    expect(rightPart).toBeInTheDocument();
  });

  test('`[Country!]!` type renders correctly', () => {
    const { getByText } = render(<TypeName type={countriesField.type} onSelectType={vi.fn()} />);
    const typeName = getByText('Country');
    const leftPart = getByText(/\[/i);
    const rightPart = getByText(/!]!/i);
    expect(typeName).toBeInTheDocument();
    expect(leftPart).toBeInTheDocument();
    expect(rightPart).toBeInTheDocument();
  });

  test('`ID!` type renders correctly', () => {
    const { getByText } = render(<TypeName type={codeField.type} onSelectType={vi.fn()} />);
    const typeName = getByText('ID');
    const rightPart = getByText(/!/i);
    expect(typeName).toBeInTheDocument();
    expect(rightPart).toBeInTheDocument();
  });

  test('`String` type renders correctly', () => {
    const { getByText } = render(<TypeName type={nameField.type} onSelectType={vi.fn()} />);
    const typeName = getByText('String');
    expect(typeName).toBeInTheDocument();
  });

  test('click on type call onSelectType handler', () => {
    const onSelectType = vi.fn();
    const { getByRole } = render(<TypeName type={objectType} onSelectType={onSelectType} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(onSelectType).toHaveBeenCalledTimes(1);
    expect(onSelectType).toHaveBeenCalledWith(objectType.name);
  });
});
