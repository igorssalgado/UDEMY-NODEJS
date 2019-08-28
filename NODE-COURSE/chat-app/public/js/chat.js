const socket = io();

socket.on('message', (welcomeMessage) => {
    console.log(welcomeMessage);
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const message = e.target.elements.message.value // to get the input 

    socket.emit('sendMessage', message);
})
