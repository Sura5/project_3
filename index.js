/* file brings all the modules together and implements the command-line interface (CLI) for the movie catalog */
/* It starts by importing the necessary functions from the modules,
 including file handling, movie management, API requests, and user interaction */
const { readMovieCatalog, writeMovieCatalog } = require('./fileHandler');
const {
  getMovieCatalog,
  addMovie,
  updateMovie,
  deleteMovie,
  searchMovies,
  filterMovies,
} = require('./movieManager');
const { getUserInput, displayMovieDetails, displayMovies } = require('./userInteraction');
const { fetchMoviesFromAPI } = require('./apiRequests');

const filePath = 'movies.json';
let movieCatalog = readMovieCatalog(filePath);

async function fetchMoviesAndSaveToCatalog(apiKey) {
  const movies = await fetchMoviesFromAPI(apiKey);
  movieCatalog = movies;
  saveMovieCatalog();
  console.log('Movies fetched from API and saved to catalog successfully!');
}

function saveMovieCatalog() {
  writeMovieCatalog(filePath, movieCatalog);
}

function main() {
  while (true) {
    console.log('=== Movie Catalog CLI ===');
    console.log('1. Display Movie Catalog');
    console.log('2. Add New Movie');
    console.log('3. Update Movie Details');
    console.log('4. Delete Movie');
    console.log('5. Search Movies');
    console.log('6. Filter Movies');
    console.log('7. Fetch Movies from API');
    console.log('8. Exit');
    console.log('=========================');

    const choice = parseInt(getUserInput('Enter your choice: '));

    switch (choice) {
      case 1:
        displayMovies(getMovieCatalog(movieCatalog));
        break;
      case 2:
        addMovie(movieCatalog, {
          title: getUserInput('Enter title: '),
          director: getUserInput('Enter director: '),
          releaseYear: getUserInput('Enter release year: '),
          genre: getUserInput('Enter genre: '),
        });
        saveMovieCatalog();
        console.log('Movie added successfully!');
        break;
      case 3:
        const updateIndex = parseInt(getUserInput('Enter the index of the movie you want to update: '));
        const updatedMovie = {
          title: getUserInput('Enter new title: '),
          director: getUserInput('Enter new director: '),
          releaseYear: getUserInput('Enter new release year: '),
          genre: getUserInput('Enter new genre: '),
        };

        updateMovie(movieCatalog, updateIndex - 1, updatedMovie);
        saveMovieCatalog();
        console.log('Movie details updated successfully!');
        break;
      case 4:
        const deleteIndex = parseInt(getUserInput('Enter the index of the movie you want to delete: '));

        deleteMovie(movieCatalog, deleteIndex - 1);
        saveMovieCatalog();
        console.log('Movie deleted successfully!');
        break;
      case 5:
        const searchQuery = getUserInput('Enter search query: ').toLowerCase();
        const searchResults = searchMovies(movieCatalog, searchQuery);
        displayMovies(searchResults);
        break;
      case 6:
        console.log('Filter by:');
        console.log('1. Genre');
        console.log('2. Release Year');
        const filterOption = parseInt(getUserInput('Enter your choice: '));

        if (filterOption === 1) {
          const genreFilter = getUserInput('Enter genre: ').toLowerCase();
          const genreResults = filterMovies(movieCatalog, 'genre', genreFilter);
          displayMovies(genreResults);
        } else if (filterOption === 2) {
          const releaseYearFilter = parseInt(getUserInput('Enter release year: '));
          const yearResults = filterMovies(movieCatalog, 'releaseYear', releaseYearFilter);
          displayMovies(yearResults);
        } else {
          console.log('Invalid choice.');
        }
        break;
      case 7:
        const apiKey = getUserInput('Enter your API key: ');
        fetchMoviesAndSaveToCatalog(apiKey);
        break;
      case 8:
        console.log('Goodbye!');
        return;
      default:
        console.log('Invalid choice. Please try again.');
    }
  }
}

main();

















