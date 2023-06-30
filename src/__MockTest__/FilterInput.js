import React from 'react';
import PropTypes from 'prop-types';

const FilterInput = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Search by Name"
  />
);

FilterInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
FilterInput.defaultProps = {
  value: '',
};
export default FilterInput;
