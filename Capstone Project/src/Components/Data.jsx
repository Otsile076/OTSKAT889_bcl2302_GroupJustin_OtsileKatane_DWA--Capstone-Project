const API_BASE_URL = 'https://podcast-api.netlify.app';

export const fetchShows = async () => {
  const response = await fetch(`${API_BASE_URL}/shows`);
  const data = await response.json();
  return data;
};

export const fetchShowDetails = async (showId) => {
  const response = await fetch(`${API_BASE_URL}/id/${showId}`);
  const data = await response.json();
  return data;}