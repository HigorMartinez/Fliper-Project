import React from 'react';
import classes from './Dashboard.module.css';
import { useSelector } from 'react-redux';

import Card from '../components/Card/Card';
import Layout from '../components/Layout/Layout';


const Dashboard = () => {

    const wealthSummary = useSelector((state) => state.dashboard.items[0]);

    const error = useSelector((state) => state.dashboard.error);


    return (
        <Layout>
          <Card wealthSummary={wealthSummary}/>
        </Layout>
    );
}

export default Dashboard;