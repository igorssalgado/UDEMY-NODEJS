const path = require('path');
const http = require('http');
const express = require('express');
const sockedio = require('socket.io');
const Filter = require('bad-words');

const app = express();
const server = http.createServer(app); //allows to create a web server for socket.io
const io = sockedio(server); // to configure socket.io with a given server

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath));

io.on('connection', (socket) => { // connection is going to fire whenever the socked.io server gets a new connection
    console.log('New WebSocket connection')

    socket.emit('message', 'Welcome!');
    socket.broadcast.emit('message', 'A new user has joined')

    socket.on('sendMessage', (msg, callback) => {
        const filter = new Filter();

        if (filter.isProfane(msg)) {
            return callback('Profanity is not allowed!')
        }
        
        if(msg.trim() === ''){
            return callback('Message cannot be empty!')
        }

        io.emit('message', msg);
        callback('Delivered!');
    })

    socket.on('disconnect', () => { // () this code is going to run whenever a user is disconnected
        io.emit('message', 'A user has left!')
    })

    socket.on('sendLocation', (coords, callback) => {
        const locationURL = `https://google.com/maps?q=${coords.latitude},${coords.longitude}`;
        
        io.emit('locationMessage', locationURL);
        
        callback();
    })
})

server.listen(port, () => {
    console.log(`Server running on port ${port}!`);
})