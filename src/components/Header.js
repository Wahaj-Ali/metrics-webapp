import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { AiFillAudio } from 'react-icons/ai';
import { IoIosArrowBack, IoMdSettings } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = (props) => {
  const { name, returnPage } = props;
  return (
    <div className={styles.navbar} data-testid="header">
      {returnPage && (
      <Link to="/">
        <IoIosArrowBack className={styles.iconBack} />
      </Link>
      )}
      <div className={styles.brand}>
        <h1>{name}</h1>
      </div>
      <Row className={styles.settings}>
        <div className={styles.audio}>
          <AiFillAudio size={25} />
        </div>
        <div>
          <IoMdSettings size={25} />
        </div>
      </Row>
    </div>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  returnPage: PropTypes.bool,
}.isRequired;

export default Header;
