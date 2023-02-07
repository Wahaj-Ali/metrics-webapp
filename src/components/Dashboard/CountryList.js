import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchApi } from '../../Redux/pollution/pollutionSlice';
import Country from './Country';
import styles from './country.module.css';

const CountryList = () => {
  const [search, setSearch] = useState('');
  const searchCountry = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  const countryList = useSelector((state) => state.pollutionSlice.countryList);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!countryList) {
      dispatch(fetchApi());
    }
  }, [dispatch], countryList);

  return (
    <>
      <input className={styles.searchBar} type="text" value={search} placeholder="Search..." onChange={searchCountry} />

      <div className={styles.countryContainer}>
        <ul className={styles.countrylist}>
          {countryList
            ? countryList.map((country) => (
              <li key={country.numericCode}>
                <Link to={`/${country.numericCode}`} className={styles.singleCountry}>
                  <BsArrowRightCircle className={styles.direct} />
                </Link>
                <Country country={country} />
              </li>
            ))
            : <p className="max-width flex-center">Empty List</p>}
        </ul>

      </div>
    </>
  );
};

export default CountryList;
