import React from 'react';
import PropTypes from 'prop-types';
import Country from '../Dashboard/Country';
import styles from './countrDetails.module.css';

const CountryDetail = (props) => {
  const { country } = props;

  const detailList = [];
  Object.keys(country).forEach((key) => {
    if ((typeof country[key] === 'string'
          || typeof country[key] === 'number')
          && (key !== 'alpha2Code'
            && key !== 'alpha3Code'
            && key !== 'flag'
          )) {
      return (
        detailList.push({ key, value: country[key] })
      );
    }
    return false;
  });
  return (
    <div className={styles.statContainer}>
      <div className={styles.lesserDetail}>
        <Country country={country} />
      </div>
      <h3 className={styles.heading}>Stats: </h3>
      <ul className={styles.detailContainer}>
        {detailList.map((detail) => (
          <li key={detail.key} className="row details">
            <span className={styles.keys}>
              {detail.key}
              :
            </span>
            <span className={styles.values}>{detail.value}</span>
          </li>
        ))}
      </ul>

    </div>
  );
};

CountryDetail.propTypes = {
  country: PropTypes.string,
}.isRequired;

export default CountryDetail;
