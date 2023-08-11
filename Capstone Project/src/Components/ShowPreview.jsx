

import React, { useState } from 'react';
const genreTitleMapping = {
  1: 'Personal Growth',
  2: 'True Crime and Investigative Journalism',
  3: 'History',
  4: 'Comedy',
  5: 'Entertainment',
  6: 'Business',
  7: 'Fiction',
  8: 'News',
  9: 'Kids and Family',
};
const ShowPreview = ({ show, favorites, setFavorites, handleShowClick }) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetail = () => {
    setShowDetails(!showDetails);
  };
  const handleAddToFavorites = () => {
    // Add the current show to favorites list
    setFavorites((prevFavorites) => [...prevFavorites, show]);
  };
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="show-preview">
      <img className="showImg" src={show.image} alt={show.title} onClick={handleShowDetail} />
      <h2 className="p-Title">{show.title}</h2>
      <p className="podcast-item2">Seasons: {show.seasons}</p>
      <p className="podcast-item3">Last Updated: {formatDate(show.updated)}</p>
      <p className="podcast-item4">Genres: {show.genres.map((genreId) => genreTitleMapping[genreId]).join(', ')}</p>
      {showDetails && <p className="podcast-item5">Description: {show.description}</p>}
      <button className ="favorites" onClick={handleAddToFavorites}>Add to Favorites</button>
      <button onClick={() => handleShowClick(show.id)} className ="View-seasons">View Seasons</button>
    </div>
  );
};
export default ShowPreview;