import { actions as loadingActions } from '@/store/loading/loading.slice';
import { actions as userActions } from '@/store/user/user.slice';
import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
  bindActionCreators,
} from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

const rootActions = {
  ...userActions,
  ...loadingActions,
};

export const useActions = (): {
  setUser: ActionCreatorWithPayload<User | null, 'user/setUser'>;
  removeUser: ActionCreatorWithoutPayload<'user/removeUser'>;
  setIsLoading: ActionCreatorWithPayload<boolean, 'loading/setIsLoading'>;
} => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
