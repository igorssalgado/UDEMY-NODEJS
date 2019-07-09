const path = require('path');
const express = require('express');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static diretory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather', 
        name: 'Igor S'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me', 
        name: 'Igor S'
    });
});

app.get('/help', (req, res) => {
    res.render('help' , {
        title: 'HELP!',
        helpMsg: 'Helpful message.'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'cold',
        location: 'campinas'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});