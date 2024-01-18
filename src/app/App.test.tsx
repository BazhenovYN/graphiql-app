import { renderWithProviders } from '@/utils/test-utils';
import { act } from '@testing-library/react';
import { AppWrapper } from './App';

describe('App test', () => {
  test('Must render app correctly', async () => {
    const { getByRole } = await act(async () => renderWithProviders(<AppWrapper />));

    expect(getByRole('banner')).toBeInTheDocument();
    expect(getByRole('main')).toBeInTheDocument();
    expect(getByRole('contentinfo')).toBeInTheDocument();
  });
});
