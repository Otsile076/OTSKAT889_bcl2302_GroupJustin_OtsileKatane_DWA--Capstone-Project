import React, { useState } from 'react';
import axios from 'axios';

const SortButton = () => {
  const [button, setButton] = useState('');
  const [buttonResults, setButtonResults] = useState([]);

  const handleSearch = () => {
    const apiUrl = `https://podcast-api.netlify.app/show=${button}`;

    axios.get(apiUrl)
      .then(response => {
        setButtonResults(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  };

  const handleInputChange = (event) => {
    setButton(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={button}
        onChange={handleInputChange}
        placeholder="Search here"
      />
      <button onClick={handleSearch}>Search</button>
      {buttonResults.map((result, button) => (
        <div key={button}>{result.series}</div>
       
      ))}
    </div>
  );
};

export default SortButton;

