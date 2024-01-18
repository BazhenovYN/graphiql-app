import { mockUser } from '@/mocks/user';
import { actions as loadingActions } from '@/store/loading/loading.slice';
import { actions as userActions } from '@/store/user/user.slice';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { default as configureStore } from 'redux-mock-store';
import { useActions } from './useActions';
import { User } from 'firebase/auth';

interface AppState {
  user: User;
  loading: boolean;
}

describe('useActions hook tests', () => {
  const middlewares: [] = [];
  const mockStore = configureStore<AppState>(middlewares);
  test('useActions hook dispatches the correct actions', () => {
    const initialState: AppState = {
      user: mockUser,
      loading: false,
    };
    const store = mockStore(initialState);
    const wrapper = ({ children }: { children: React.ReactElement }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result } = renderHook(() => useActions(), { wrapper });

    result.current.setUser(mockUser);
    result.current.removeUser();
    result.current.setIsLoading(true);

    const actions = store.getActions();

    expect(actions[0]).toEqual(userActions.setUser(mockUser));
    expect(actions[1]).toEqual(userActions.removeUser());
    expect(actions[2]).toEqual(loadingActions.setIsLoading(true));
  });
});
