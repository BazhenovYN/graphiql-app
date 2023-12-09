import { act, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RootLayout } from './RootLayout';

describe('RootLayout', () => {
  test('renders correctly', async () => {
    const { getByRole } = await act(async () => render(<RootLayout />, { wrapper: MemoryRouter }));
    const header = getByRole('banner');
    const main = getByRole('main');
    const footer = getByRole('contentinfo');
    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
