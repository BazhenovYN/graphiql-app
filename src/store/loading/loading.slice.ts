import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ILoadingSlice {
  loading: boolean;
}

const initialState: ILoadingSlice = { loading: false };

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const { actions, reducer } = loadingSlice;

export const loadingReducer = loadingSlice.reducer;
