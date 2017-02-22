var axios = require('axios');

var API_LOCATION = 'http://apidev.accuweather.com/locations/v1/search';
var API_CONDITIONS = 'http://apidev.accuweather.com/currentconditions/v1/{locationKey}.json';

// Application entry point
(function init() {
  var API_KEY = 'hoArfRosT1215';
  getApiLocation(API_KEY);
}());

function getApiLocation(apiKey) {
  var URL = API_LOCATION + '?apikey=' + apiKey;
  URL += '&q=Campinas,%20S%C3%A3o%20Paulo,%20BR&apikey=hoArfRosT1215'

  console.log('\n=== FETCHING URL ===');
  console.log(URL);

  axios.get(URL)
    .then(onApiLocationRequestSuccess)
    .catch(onApiRequestError);
}
function onApiLocationRequestSuccess(response) {
  var json = response.data[0];
  console.log('\n=== RESPONSE ===\n');
  console.log(json);
  // Your solution goes here
}

function getApiConditions(locationKey) {
  var URL = API_CONDITIONS;

  console.log('\n=== FETCHING URL ===');
  console.log(URL);

  axios.get(URL)
    .then(onApiConditionsRequestSuccess)
    .catch(onApiRequestError);
}
function onApiConditionsRequestSuccess(response) {
  var json = response.data[0];
  console.log('\n=== RESPONSE ===\n');
  console.log(json);
  // Your solution goes here
}

function onApiRequestError(error) {
  console.error(error);
}
