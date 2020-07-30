const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const query = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(query, (error, response, body) => {
    if (error || response.statusCode >= 300) {
      callback(error, null, null);
    }
    const data = JSON.parse(body);
    if (data.length > 0) {
      callback(null, data[0].description.trim(), data[0].name); //trim whitespace on description
    } else {
      callback("Invalid breed", null, null);
    }
  });
}

module.exports = {
  fetchBreedDescription
}