const path = require('path');
const http = require('http');
const express = require('express');
const sockedio = require('socket.io')

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

    socket.on('sendMessage', (msg) => {
        io.emit('message', msg)
    })

    socket.on('disconnect', () =>{ // () this code is going to run whenever a user is disconnected
        io.emit('message', 'A user has left!')
    })
})

server.listen(port, () => {
    console.log(`Server running on port ${port}!`);
})