import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CountryDetail from '../components/Detail/countryDetail';
import Header from '../components/Header';

const Details = () => {
  const { topLevelDomain } = useParams();
  const countryList = useSelector((state) => state.pollutionSlice.countryList);
  let name;
  let detailedContent = '';
  if (countryList) {
    const country = countryList.filter((country) => (
      country.numericCode.toString() === topLevelDomain
    ))[0];
    name = country.name;
    detailedContent = (<CountryDetail country={country} />);
  }

  return (
    <div>
      <Header name={name} returnPage />
      {countryList && (detailedContent)}
    </div>
  );
};

export default Details;
