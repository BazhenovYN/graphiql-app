import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/user.slice';
import { loadingReducer } from './loading/loading.slice';

export const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
