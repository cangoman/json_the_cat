const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];


fetchBreedDescription(breedName, (error, desc, name) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else  if (desc !== ""){
    console.log(`Search for '${breedName}' returned result for ${name}`);
    console.log(desc);
  } else {
    console.log('Search returned no results');
  }
})




