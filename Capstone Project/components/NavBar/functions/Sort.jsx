import React, { useState } from 'react';
import axios from 'axios';

const SortButton = () => {
  const [sort, setSort] = useState('');
  const [sortResults, setSortResults] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for A-Z, 'desc' for Z-A

  const handleSearch = () => {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to use
    const apiUrl = `https://podcast-api.netlify.app/shows=${sort}`;

    axios.get(apiUrl)
      .then(response => {
        // Sort the response data based on sortOrder
        const sortedData = response.data.sort((a, b) => {
          if (sortOrder === 'asc') {
            return a.name.localeCompare(b.name);
          } else {
            return b.name.localeCompare(a.name);
          }
        });

        setSortResults(sortedData);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  };

  const handleInputChange = (event) => {
    setSort(event.target.value);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    handleSearch();
  };

  return (
    <div>
      <input
        type="text"
        value={sort}
        onChange={handleInputChange}
        placeholder="Enter your search query"
      />
      <button onClick={() => handleSort('asc')}>Sort A-Z</button>
      <button onClick={() => handleSort('desc')}>Sort Z-A</button>
      {sortResults.map((result, sort) => (
        <div key={sort}>{result.sort}</div>
    
      ))}
    </div>
  );
};

export default SortButton;
