import { dashboardActions } from './dashboard-slice';

export const setData = (data) => {

  return async (dispatch) => {
    dispatch(
      dashboardActions.loadWealthSummary({
        items: data
      })
    );
  }
};

export const setLoading = (loading) => {

  return (dispatch) => {
    dispatch(
      dashboardActions.setLoading({
        loading: loading,
      })
    );
  }
};

export const setError = (error) => {

  return (dispatch) => {
    dispatch(
      dashboardActions.setError({
        error: error,
      })
    );
  }
};



