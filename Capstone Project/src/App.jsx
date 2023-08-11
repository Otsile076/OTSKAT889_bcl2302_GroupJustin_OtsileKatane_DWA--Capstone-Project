import React, { useState, useEffect, Fragment } from 'react';
import { fetchShows, fetchShowDetails } from './Components/Data';
import ShowPreview from './components/ShowPreview';
import './App.css';
import Login from './Components/Login';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const sortShows = (shows, order, criteria) => {
  const compareFunction = (a, b) => {
    if (order === 'asc') {
      return a[criteria] > b[criteria] ? 1 : -1;
    } else {
      return a[criteria] < b[criteria] ? 1 : -1;
    }
  };
  return shows.slice().sort(compareFunction);
};

const App = () => {
  const [showPreviews, setShowPreviews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedShow, setSelectedShow] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [view, setView] = useState('startPhase');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortCriteria, setSortCriteria] = useState('title');
  const [isLoggedIn, setIsLoggedIn] = useState('signUpPhase');

  const handleSearch = () => {
    setLoading(true);
    try {
      const searchResults = showPreviews.filter(show => show.title.toLowerCase().includes(searchQuery.toLowerCase()));
      setShowPreviews(searchResults);
    } catch (error) {
      console.error('Error during search:', error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleShowClick = async (showId) => {
    try {
      setLoading(true);
      const data = await fetchShowDetails(showId);
      setSelectedShow(data);
      setSelectedSeason(null);
      setView('showDetail');
    } catch (error) {
      console.error('Error fetching show details:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSeasonClick = (seasonNumber) => {
    setSelectedSeason(seasonNumber);
  };

  const sortedShows = sortShows(showPreviews, sortOrder, sortCriteria);

  useEffect(() => {
    const getShowPreviews = async () => {
      setLoading(true);
      try {
        const previews = await fetchShows();
        setShowPreviews(previews);
      } catch (error) {
        console.error('Error fetching show previews:', error);
      } finally {
        setLoading(false);
      }
    };
    getShowPreviews();
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      <header>
        
        
<h1 className="head">Intermission!!!</h1>
      </header>
      <main>
        <div className="action-buttons">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          <button onClick={() => setSortOrder('asc')}>Sort Ascending</button>
          <button onClick={() => setSortOrder('desc')}>Sort Descending</button>
          <button onClick={() => setSortCriteria('title')}>Sort by Title</button>
          <button onClick={() => setSortCriteria('seasons')}>Sort by Seasons</button>
        </div>
        {view === 'showDetail' && selectedShow ? (
          <div className="episodes-container">
            <button onClick={() => setView('startPhase')}>Back to Show List</button>
            <div>
              <h2>{selectedShow.title}</h2>
              {selectedShow.seasons.map((season) => (
                <div key={season.number}>
                  <h3>Season {season.number}</h3>
                  {selectedSeason === season.number ? (
                    <ul>
                      {season.episodes.map((episode) => (
                        <Fragment key={episode.id}>
                          <h4>{episode.name}</h4>
                          <li>{episode.title}</li>
                          <p>{episode.description}</p>
                          <audio controls>
                            <source src={episode.file} />
                          </audio>
                        </Fragment>
                      ))}
                    </ul>
                  ) : (
                    <div className="image--">
                      <img className="showImg" src={season.image} alt={`Season ${season.number}`} />
                      <div>{season.episodes.length} Episodes</div>
                      <button onClick={() => handleSeasonClick(season.number)}>View Episodes</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2>Shows</h2>
            {/*<Carousel>*/}
              {sortedShows.map((show) => (
                <ShowPreview key={show.id} 
                show={show} 
                handleShowClick={handleShowClick} />
              ))}
            {/*</Carousel>*/}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;




 
