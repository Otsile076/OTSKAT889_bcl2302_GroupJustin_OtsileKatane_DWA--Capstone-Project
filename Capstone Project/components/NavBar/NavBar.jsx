import  { useState } from 'react';
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
      <form className="Nav">
      <label htmlFor="searchBar">Name of Movie:</label>
        <input type="text" placeholder="movie" name="seacrh here" />
        <label htmlFor="genreBar">Genre of movie</label>
        <input type="text" placeholder="genre" name="genre" />
        <button type="button" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
NavBar.propTypes = {
  onSort: PropTypes.func.isRequired,
};
export default NavBar;
