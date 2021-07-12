import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    items: [],
    error: null,
    loading: true
  },
  reducers: {
    loadWealthSummary(state, action) {
      state.items = action.payload.items;
    },

    setLoading(state, action) {
      state.loading = action.payload.loading;
    },

    setError(state, action) {
      state.error = action.payload.error;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice;