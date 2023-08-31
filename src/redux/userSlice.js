import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateStart: state => {
      state.loading = true;
    },
    updateFailure: state => {
      state.loading = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginStart: state => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailure: state => {
      state.loading = false;
      state.error = true;
    },
    logout: state => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  updateStart,
  updateFailure,
  updateSuccess,
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
