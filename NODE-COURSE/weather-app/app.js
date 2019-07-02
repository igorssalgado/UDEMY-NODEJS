const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// geocode('campinas', (error, data) => {
//     console.log('Error:', error);
//     console.log('Data:', data)
// });

// order: lat, long
forecast( '-22.9a056' , -47.0608, (error, data) => { 
    console.log('Error:', error)
    console.log('Data:', data)
  })