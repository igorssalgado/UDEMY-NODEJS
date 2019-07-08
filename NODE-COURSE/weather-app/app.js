const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if(!address){
    return console.log('Please provide an address');
}

geocode(address, (error, { latitude, longitude, location }) => {
    if(error){ 
      return console.log('Error:', error);
    }

    forecast( latitude , longitude, (error, forecastData) => {     // order: lat, long
        if(error){
            return console.log('Error:', error)
        }

       console.log(location);
       console.log(forecastData);
    })
});