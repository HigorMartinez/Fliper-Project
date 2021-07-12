import { configureStore } from '@reduxjs/toolkit';

import dashboardSlice from './dashboard-slice';

const store = configureStore({
  reducer: { dashboard: dashboardSlice.reducer },
});

export default store;