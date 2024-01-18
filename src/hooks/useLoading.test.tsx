import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { default as configureStore } from 'redux-mock-store';
import { useLoading } from './useLoading';

interface AppState {
  loading: { loading: boolean };
}

describe('useLoading hook tests', () => {
  const middlewares: [] = [];
  const mockStore = configureStore<AppState>(middlewares);

  test('should return loading = false when not loading', () => {
    const initialState: AppState = {
      loading: { loading: false },
    };
    const store = mockStore(initialState);

    const wrapper = ({ children }: { children: React.ReactElement }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result } = renderHook(() => useLoading(), { wrapper });

    expect(result.current.loading).toBe(false);
  });

  test('should return loading = true when loading', () => {
    const initialState: AppState = {
      loading: { loading: true },
    };
    const store = mockStore(initialState);

    const wrapper = ({ children }: { children: React.ReactElement }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result } = renderHook(() => useLoading(), { wrapper });

    expect(result.current.loading).toBe(true);
  });
});
