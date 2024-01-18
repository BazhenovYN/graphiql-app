import { fireEvent, render } from '@testing-library/react';
import { Mock } from 'vitest';

import { GraphiQL } from './GraphiQL';

beforeEach(() => {
  (fetch as Mock).mockReset();
});

describe('GraphiQL', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<GraphiQL />);
    const editor = getByTestId('graphql-editor');
    expect(editor).toBeInTheDocument();
  });

  test('updates the URL input value', () => {
    const url = 'https://example.com/graphql';
    const { getByRole } = render(<GraphiQL />);
    const urlInput = getByRole('combobox');
    fireEvent.change(urlInput, { target: { value: url } });
    expect(urlInput).toHaveValue(url);
  });
});
