import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import styles from './country.module.css';

const Country = (props) => {
  const { country, detailed } = props;
  const { name, population, flags } = country;
  return (

    <Col className={styles.card}>
      <div className={styles.descpDiv}>

        <img className={styles.flag} src={flags.svg} alt={`${name}Country Images`} />

        <div className={styles.descp}>
          <h4>{name}</h4>
          <p>
            {detailed && 'Poplution: '}
            {population}
          </p>
        </div>

      </div>
    </Col>

  );
};

Country.propTypes = {
  name: PropTypes.string,
  population: PropTypes.number,
  flags: PropTypes.any,
}.isRequired;

export default Country;
