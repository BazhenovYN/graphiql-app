import { render, waitFor } from '@testing-library/react';
import { Mock } from 'vitest';
import { UserAuthListener } from './UserAuthListener';

vi.mock('@/firebase/app', () => {
  const actualFirebase = vi.importActual('firebase/app');
  return {
    ...actualFirebase,
    auth: vi.fn(() => ({
      onAuthStateChanged: vi.fn(),
    })),
  };
});

let setUserMock: Mock;
vi.mock('@/hooks/useActions', () => ({
  useActions: () => ({
    setUser: setUserMock,
  }),
}));

vi.mock('@/hooks/useLoading', () => ({
  useLoading: () => ({
    loading: false,
  }),
}));

describe('UserAuthListener tests', () => {
  const setup = (loading: boolean) => {
    setUserMock = vi.fn();
    loading;
  };

  test('Should call setUser on auth state change', async () => {
    setup(false);
    render(<UserAuthListener />);

    await waitFor(() => {
      expect(setUserMock).toHaveBeenCalled();
    });
  });

  test('Should not call setUser when loading', async () => {
    setup(true);
    render(<UserAuthListener />);

    await waitFor(() => {
      expect(setUserMock).not.toHaveBeenCalled();
    });
  });
});
