import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';
import { fetchApi } from '../../Redux/pollution/pollutionSlice';
import Country from './Country';
import styles from './country.module.css';

const CountryList = () => {
  const countryList = useSelector((state) => state.pollutionSlice.countryList);

  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const [currentPage, setCurrentPage] = useState(0);

  const isMobile = window.innerWidth <= 768;
  const itemsPerPage = isMobile ? 4 : 8;

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
    setCurrentPage(0);
  };

  useEffect(() => {
    if (!countryList) {
      dispatch(fetchApi());
    }
  }, [dispatch, countryList]);

  // Handle page change
  const handlePageChange = (selected) => {
    setCurrentPage(selected.selected);
  };

  // Filter and paginate the data
  const filteredItems = countryList
    ? countryList.filter((filtered) => {
      if (search === '') {
        return filtered;
      }
      return filtered.name.toLowerCase().includes(search);
    })
    : [];

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
  const displayedItems = filteredItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
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
          {displayedItems.length > 0 ? (
            displayedItems.map((country) => (
              <li key={country.numericCode} className={styles.list}>
                <Link to={`/${country.numericCode}`} className={styles.singleCountry}>
                  <BsArrowRightCircle className={styles.direct} />
                  <Country country={country} detailed />
                </Link>
              </li>
            ))
          ) : (
            <p className="max-width flex-center">No matching countries found.</p>
          )}
        </ul>
        {/* Pagination component */}
        {countryList && (
          <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            breakLabel=""
            pageCount={pageCount}
            pageRangeDisplayed={3}
            marginPagesDisplayed={0}
            onPageChange={handlePageChange}
            className={styles.pagination}
            pageClassName={styles.pageItem}
            pageLinkClassName={styles.pageLink}
            previousClassName={styles.pageItem}
            previousLinkClassName={styles.pageLink}
            nextClassName={styles.pageItem}
            nextLinkClassName={styles.pageLink}
            activeClassName={styles.active} //
          />
        )}
      </div>
    </>
  );
};

export default CountryList;
