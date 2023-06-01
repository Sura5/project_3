const fetch = require('node-fetch');

async function fetchMoviesFromAPI(apiKey) {
  try {
    const response = await fetch(`https://api.example.com/movies?apiKey=${apiKey}`);
    const data = await response.json();
    return data.movies;
  } catch (err) {
    console.error('Error fetching movies from API:', err);
    return [];
  }
}
/* function takes an API key as an argument.
 It uses the node-fetch library to make an HTTP GET request to a movie database API, passing the API key as a query parameter. */
 /*The response from the API is parsed as JSON using the response.json() method, 
 and the movies are extracted from the response data. The function returns the fetched movies */

module.exports = {
  fetchMoviesFromAPI,
};
