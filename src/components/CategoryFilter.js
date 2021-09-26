import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../common';

function CategoryFilter({ handleFilter }) {
  return (
    <div className="d-flex align-items-center select-wrapper">
      <span className="mr-3">Category: </span>
      <select className="form-control" name="categoryFilter" id="categoryFilter" onChange={handleFilter}>
        {['All', ...categories].map((category) => <option key={category}>{category}</option>)}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
