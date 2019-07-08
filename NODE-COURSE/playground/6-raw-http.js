const https = require('https');
const url = 'https://api.darksky.net/forecast/53295cf6270e616f72bf4a2b3a7b42d6/40,-75?units=si';

const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
        console.log(chunk);
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })

});

request.on('error', (error) => {
    console.log(error);
});

request.end();