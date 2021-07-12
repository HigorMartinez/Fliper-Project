import React, { useEffect, Fragment } from 'react';
import { useQuery } from "@apollo/client";
import { useDispatch } from 'react-redux';

import { GET_WEALTH_SUMMARY_DATA } from './services/Queries';
import { setData, setLoading, setError } from './store/dashboard-actions';
import Dashboard from './pages/Dashboard';


const App = () => {

  const dispatch = useDispatch();

  const { data, loading, error } = useQuery(GET_WEALTH_SUMMARY_DATA);

  useEffect(() => {
    

    if (data) {
      dispatch(setData(data.wealthSummary));
      dispatch(setLoading(loading));
    }

    if (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(loading));
    }
   
  }, [dispatch, data, loading, error]); 
  
  
  return (
    <Fragment>
      <Dashboard/>
    </Fragment>
  )
}

export default App;
