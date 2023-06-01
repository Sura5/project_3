const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getUserInput(question) {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer);
    });
  });
}/*The response from the API is parsed as JSON using the response.json() method,
 and the movies are extracted from the response data. The function returns the fetched movies */

function displayMovieDetails(movie) {
  console.log('Title:', movie.title);
  console.log('Director:', movie.director);
  console.log('Release Year:', movie.releaseYear);
  console.log('Genre:', movie.genre);
}/*unction takes a movie object as an argument and displays its details (title, director, release year, genre) to the console.  */

function displayMovies(movieList) {
  movieList.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie.title}`);
  })};
/*  function takes a movie list as an argument and displays the titles of the movies to the console  */

module.exports = {
  getUserInput,
  displayMovieDetails,
  displayMovies,
};
