import React from 'react';
import CountryList from '../components/Dashboard/CountryList';
import Header from '../components/Header';

const Dashboard = () => (
  <div>
    <Header name="Population Index" returnPage={false} />
    <CountryList />
  </div>
);

export default Dashboard;
