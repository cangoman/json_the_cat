const request = require('request');

const search = process.argv[2];
const query = 'https://api.thecatapi.com/v1/breeds/search?q=' + search;

request(query, (error, response, body) => {
  if (error || response.statusCode >= 300) {
    console.log("Error: ", error);
    process.exit(1);
  }

  const data = JSON.parse(body);
  if (data.length > 0) {
    console.log(`Search for '${search}' returned result for ${data[0].name}`);
    console.log(data[0].description);
  } else {
    console.log("Breed not found");
  }
  //console.log(typeof data);
});

