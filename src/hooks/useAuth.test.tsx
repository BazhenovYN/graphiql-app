import { renderHook } from '@testing-library/react';
import { User } from 'firebase/auth';
import { Provider } from 'react-redux';
import { default as configureStore } from 'redux-mock-store';
import { useAuth } from './useAuth';
import { mockUser } from '@/mocks/user';

interface AppState {
  user: { currentUser: User | null };
}

describe('useAuth hook tests', () => {
  const middlewares: [] = [];
  const mockStore = configureStore<AppState>(middlewares);

  test('should return isAuth as false when User does not exist', () => {
    const initialState = {
      user: { currentUser: null },
    };
    const store = mockStore(initialState);

    const wrapper = ({ children }: { children: React.ReactElement }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current.isAuth).toBe(false);
  });

  test('should return isAuth as true when User is exist', () => {
    const initialState = {
      user: { currentUser: mockUser },
    };
    const store = mockStore(initialState);

    const wrapper = ({ children }: { children: React.ReactElement }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current.isAuth).toBe(true);
  });
});
