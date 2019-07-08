const request = require('request');

const forecast = (longitude, latitude, callback) => {

    url = 'https://api.darksky.net/forecast/53295cf6270e616f72bf4a2b3a7b42d6/' + encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude) + '?units=si';

    request({ url: url, json: true }, (error, response) => {
    
        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (response.body.error) {
            callback('unable to find location', undefined)
        } else {
            const temp = response.body.currently.temperature;
            const chance = response.body.currently.precipProbability;
            const tempLow = response.body.daily.data[0].temperatureLow;
            const tempHigh = response.body.daily.data[0].temperatureHigh;
        
            // console.log("MIN: %sC MAX: %sC", tempLow.toFixed(1), tempHigh.toFixed(1));
            // console.log("It is currently %s Celsius degrees out. There is %s% chance of rain.", temp, chance);

            callback(undefined, '\n' + response.body.daily.data[0].summary + '\nMIN: ' + tempLow.toFixed(1) + 'C \nMAX: ' + tempHigh.toFixed(1) + 'C \n\nIt is currently ' + temp + ' Celsius degrees out. \nThere is ' + chance + '% chance of rain. ')
        }
    });
}

module.exports = forecast;
