const fs = require('fs');

function readMovieCatalog(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading movie catalog:', err);
    return [];
  }
} //The readMovieCatalog function takes a file path as an argument and reads the contents of the file synchronously using the 
//fs.readFileSync method. It returns the parsed JSON data.

function writeMovieCatalog(filePath, movieCatalog) {
  try {
    const data = JSON.stringify(movieCatalog, null, 2);
    fs.writeFileSync(filePath, data, 'utf-8');
  } catch (err) {
    console.error('Error writing movie catalog:', err);
  }
}//The writeMovieCatalog function takes a file path and a movie catalog as arguments. It converts the movie catalog 
//to JSON data using JSON.stringify and writes it to the file synchronously using the fs.writeFileSync method.

module.exports = {
  readMovieCatalog,
  writeMovieCatalog,
};

