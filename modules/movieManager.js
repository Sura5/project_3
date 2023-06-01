function getMovieCatalog(movieCatalog) {
    return movieCatalog;
}//The getMovieCatalog function simply returns the movie catalog.


function addMovie(movieCatalog, movie) {
    movieCatalog.push(movie);
}/*The addMovie function takes the movie catalog and a new movie object as arguments. 
  It appends the new movie to the movie catalog.*/

function updateMovie(movieCatalog, index, updatedMovie) {
    if (index >= 0 && index < movieCatalog.length) {
        movieCatalog[index] = { ...movieCatalog[index], ...updatedMovie };
    }
}/*  The updateMovie function takes the movie catalog, an index, and an updated movie object as arguments. 
  It updates the movie at the given index in the movie catalog with the properties of the updated movie object */

function deleteMovie(movieCatalog, index) {
    if (index >= 0 && index < movieCatalog.length) {
        movieCatalog.splice(index, 1);
    }
}/*  function takes the movie catalog and an index as arguments. 
It removes the movie at the given index from the movie catalog.   */

function searchMovies(movieCatalog, query) {
    return movieCatalog.filter(
        movie =>
            movie.title.toLowerCase().includes(query) ||
            movie.director.toLowerCase().includes(query) ||
            movie.genre.toLowerCase().includes(query)
    );
}/*  function takes the movie catalog and a search query as arguments. It filters
 the movie catalog based on whether the movie's title, director, or genre includes the search query. It returns the filtered movies. */

function filterMovies(movieCatalog, property, value) {
    return movieCatalog.filter(movie => movie[property] === value);
}
/*  takes the movie catalog, a property, and a value as arguments
. It filters the movie catalog based on the specified property and value. It returns the filtered movies.*/

module.exports = {
    getMovieCatalog,
    addMovie,
    updateMovie,
    deleteMovie,
    searchMovies,
    filterMovies,
};






