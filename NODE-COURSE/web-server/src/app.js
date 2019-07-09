const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
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