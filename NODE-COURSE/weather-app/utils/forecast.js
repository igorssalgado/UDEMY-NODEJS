const request = require('request');

const forecast = (longitude, latitude, callback) => {

    url = 'https://api.darksky.net/forecast/53295cf6270e616f72bf4a2b3a7b42d6/-22.9845069,-47.0995991?units=si'; // -22.9845069,-47.0995991 home 

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
        
            console.log(response.body.daily.data[0].summary);
            // console.log("MIN: %sC MAX: %sC", tempLow.toFixed(1), tempHigh.toFixed(1));
            // console.log("It is currently %s Celsius degrees out. There is %s% chance of rain.", temp, chance);

            callback(undefined, '\n' + response.body.daily.data[0].summary + '\nMIN: ' + tempLow.toFixed(1) + 'C MAX: ' + tempHigh.toFixed(1) + 'C \nIt is currently ' + temp + ' Celsius degrees out. \nThere is ' + chance + '% chance of rain. ')
        }
    });
}

module.exports = forecast;
