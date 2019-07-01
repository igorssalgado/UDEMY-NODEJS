const request = require('request');
const geocode = require('./utils/geocode');

// url = 'https://api.darksky.net/forecast/53295cf6270e616f72bf4a2b3a7b42d6/-22.9845069,-47.0995991?units=si'; // -22.9845069,-47.0995991 home 

// request({ url: url, json: true }, (error, response) => {

//     if (error) {
//         console.log("Unable to connect to weather service!");
//     } else if (response.body.error) {
//         console.log('unable to find location')
//     } else {
//         const temp = response.body.currently.temperature;
//         const chance = response.body.currently.precipProbability;
//         const tempLow = response.body.daily.data[0].temperatureLow;
//         const tempHigh = response.body.daily.data[0].temperatureHigh;
    
//         console.log(response.body.daily.data[0].summary);
//         console.log("MIN: %sC MAX: %sC", tempLow.toFixed(1), tempHigh.toFixed(1));
//         console.log("It is currently %s Celsius degrees out. There is %s% chance of rain.", temp, chance);
//     }
// });

// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Campinas.json?access_token=pk.eyJ1Ijoicm9naS0iLCJhIjoiY2p4a3J5M2JjMWYwZzNvcW5idGpvMDZ0ZyJ9.YHY19utjb5VluDgs0p2Fpg&limit=1";

// request({ url: geocodeURL, json: true }, (error, response) => {

//     if (error) {
//         console.log("Unable to connect to Geo Code service!");
//     } else if (response.body.features.length === 0) {
//         console.log(Please check the location. Try another search");
//     } else {
//         const longitude = response.body.features[0].center[0];
//         const latitude = response.body.features[0].center[1];
//         console.log("Latitude: %s \nLongitude: %s", latitude, longitude);
//     }
// });

geocode('são paulo', (error, data) => {
    console.log('Error:', error);
    console.log('Data:', data)
});
