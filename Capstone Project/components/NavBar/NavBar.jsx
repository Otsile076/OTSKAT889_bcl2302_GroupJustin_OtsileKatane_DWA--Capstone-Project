import  { useState } from 'react';
import PropTypes from 'prop-types';
const NavBar = ({ onSort }) => {
  const [sortOrder, setSortOrder] = useState('asc');
  const handleSortChange = (event) => {
    const newSortOrder = event.target.value;
    setSortOrder(newSortOrder);
    onSort(newSortOrder);
  };
  return (
    <div className='sort-order'>
      <label htmlFor="sortOrder">Sort by:</label>
      <select
        id="sortOrder"
        value={sortOrder}
        onChange={handleSortChange}
      >
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>
    </div>
  );
};
NavBar.propTypes = {
  onSort: PropTypes.func.isRequired,
};
export default NavBar;

