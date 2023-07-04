import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import styles from './FilterInput.module.css';

const FilterInput = ({ value, onChange }) => {
  const [isFocused, setFocused] = useState(false);

  const handleInputFocus = () => {
    setFocused(true);
  };

  const handleInputBlur = () => {
    setFocused(false);
  };
  return (
    <div className={styles.FilterInputcontainer}>
      <div className={styles.searchWraper}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={isFocused ? '' : 'Search Crypto Exchange'}
          className={styles.filterinput}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <FaSearch className={styles.fasearch} />
      </div>

      <header className={styles.excHeader}>
        <h5>
          EXCHANGES BY RANK
          {' '}
        </h5>
        {' '}
      </header>
    </div>
  );
};
FilterInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterInput;
