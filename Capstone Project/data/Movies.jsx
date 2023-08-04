import React, { useState, useEffect } from "react";
import '../data/Movies.css'
export default function Movies() {
  const [shows, setShows] = useState([]);
  
  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="Content">
      <div className="ContentList">
        {shows.map((shows) => (
          <div key={shows.id} className="ShowCard">
            {shows.image && <img src={shows.image}  alt={shows.title} width="200px" height="200px"/>}
           { <h2>{shows.title}</h2> }
            { <p>{shows.description}</p> }
          </div>
        ))}
      </div>
    </div>
  );
};
