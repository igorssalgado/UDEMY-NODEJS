const request = require('request');

url = 'https://api.darksky.net/forecast/53295cf6270e616f72bf4a2b3a7b42d6/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.currently);
    const temp = response.body.currently.temperature;
    const chance = response.body.currently.precipProbability;
    console.log("It is currently %s degrees out. There is %s% chance of rain.", temp, chance )
    // console.log("It is currently" + response.body.currently.temperature + " degrees out. There is" +  response.body.currently.precipProbability + "chance of rain.")
})