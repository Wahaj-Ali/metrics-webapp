import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchApi } from '../../Redux/pollution/pollutionSlice';
import Country from './Country';
import styles from './country.module.css';

const CountryList = () => {
  const state = useSelector((state) => state.pollutionSlice.countryList);

  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (!state) {
      dispatch(fetchApi());
    }
  }, [dispatch, state]);

  const countryList = state.filter(
    (item) => item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <h2 className={styles.statsheading}>Stats by Country Name</h2>

      <input
        className="search-input"
        type="text"
        value={search}
        aria-label="search"
        onChange={handleChange}
        placeholder="Search a country..."
      />
      <div className={styles.countryContainer}>
        <ul className={styles.countrylist}>
          {countryList
            ? countryList.map((country) => (
              <li key={country.numericCode} className={styles.list}>
                <Link to={`/${country.numericCode}`} className={styles.singleCountry}>
                  <BsArrowRightCircle className={styles.direct} />
                  <Country country={country} detailed />
                </Link>
              </li>
            ))
            : <p className="max-width flex-center">Loading...</p>}
        </ul>
      </div>
    </>
  );
};

export default CountryList;
