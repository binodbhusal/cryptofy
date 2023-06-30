import React, { useState } from 'react';
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
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={isFocused ? '' : 'Search Crypto Exchange'}
        className={styles.filterinput}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        style={{ color: isFocused ? '#000' : '#000' }}
      />
      <header style={{ color: '#fff' }}>
        <h5>EXCHANGES BY RANK</h5>
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
