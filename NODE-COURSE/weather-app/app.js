const request = require('request');

url = 'https://api.darksky.net/forecast/53295cf6270e616f72bf4a2b3a7b42d6/-22.9845069,-47.0995991?units=si'; // -22.9845069,-47.0995991 home 

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body);
    const temp = response.body.currently.temperature;
    const chance = response.body.currently.precipProbability;
    const tempLow = response.body.daily.data[0].temperatureLow;
    const tempHigh = response.body.daily.data[0].temperatureHigh

    // const tempLowC = (tempLow - 32) * 5/9; // if tempLow comes in F
    // const tempHighC = (tempHigh - 32) * 5/9; // if tempHigh comes in F

    console.log(response.body.daily.data[0].summary);

    //F to C: (32 °F − 32) × 5/9 = 0 °C

    console.log("MIN: %s C MAX: %sC", tempLow.toFixed(1), tempHigh.toFixed(1));
    console.log("It is currently %s Celsius degrees out. There is %s% chance of rain.", temp, chance )
    // console.log("It is currently" + response.body.currently.temperature + " degrees out. There is" +  response.body.currently.precipProbability + "chance of rain.")
})