var axios = require('axios');
var AsciiTable = require('ascii-table');

var API_BASE_URL = 'https://query.yahooapis.com/v1/public/yql?format=json&diagnostics=false&q=';
var API_CITYCODE_QUERY = 'select * from geo.places where text="Campinas-SP, Brasil" | truncate(count=1)';
var API_FORECAST_QUERY = 'select * from weather.forecast where woeid in ({locationKey}) and u="C"';

// Application entry point
(function init() {
  getApiLocation();
}());

function getApiLocation() {
  var URL = API_BASE_URL + API_CITYCODE_QUERY;
  URL = encodeURI(URL);

  console.log('\n=== FETCHING URL ===');
  console.log(URL);

  axios.get(URL)
       .then(onApiLocationRequestSuccess)
       .catch(onApiRequestError);
}
function onApiLocationRequestSuccess(response) {
  var json = response.data.query.results;
  console.log('\n=== RESPONSE ===\n');
  console.log(json);
  // Your solution goes here
}

function getApiConditions(locationKey) {
  var URL = API_BASE_URL + API_FORECAST_QUERY.replace('{locationKey}', locationKey);
  URL = encodeURI(URL);

  console.log('\n=== FETCHING URL ===');
  console.log(URL);

  axios.get(URL)
       .then(onApiConditionsRequestSuccess)
       .catch(onApiRequestError);
}
function onApiConditionsRequestSuccess(response) {
  var json = response.data.query.results;
  console.log('\n=== RESPONSE ===\n');
  console.log(json);
  // Your solution goes here
}

function showForecastNextDays(json) {
  // Your solution goes here

  var config = {
    title: json.channel.item.title
    , heading: ['Date', 'Condition', 'Min', 'Max']
    , rows: ''//array expected
  };
  drawTable(config)

}

function drawTable(configurationObject) {
  var table = new AsciiTable.factory(configurationObject);
  console.log(table.toString());
}

function onApiRequestError(error) {
  console.error(error);
}
