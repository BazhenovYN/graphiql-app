import { getUserFromLocalStorage, isUserExists } from '@/utils/localStorage';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = { currentUser: isUserExists() ? getUserFromLocalStorage() : null };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User | null>) => {
      state.currentUser = payload;
    },
    removeUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { actions, reducer } = userSlice;

export const userReducer = userSlice.reducer;
