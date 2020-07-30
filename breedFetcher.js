const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const query = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(query, (error, response, body) => {
    if (error || response.statusCode >= 300) {
      callback(error, null, null);
    }
    const data = JSON.parse(body);
    if (data.length > 0) {
      callback(null, data[0].description, data[0].name);
    } else {
      callback(null, "","");
    }
  });
}


module.exports = {
  fetchBreedDescription
}