const socket = io();

// elements
const $messageForm = document.querySelector('#message-form');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');
const $sendLocationButton = document.querySelector('#send-location');
const $messages = document.querySelector('#messages');


// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML;
const locationTemplate = document.querySelector('#location-template').innerHTML;

socket.on('locationMessage', (locationURL) => {
    const html = Mustache.render(locationTemplate, {
        locationURL
    })
    $messages.insertAdjacentHTML('beforeend', html);
})

socket.on('message', (message) => {
    console.log(message);
    const html = Mustache.render(messageTemplate, {
        message
    })
    $messages.insertAdjacentHTML('beforeend', html);
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    $messageFormButton.setAttribute('disabled', 'disabled');
    // disable

    const message = e.target.elements.message.value // to get the input 

    socket.emit('sendMessage', message, (error) => {
        setTimeout(() => {
            $messageFormButton.removeAttribute('disabled', 'disabled');
        }, 200)
        $messageFormInput.value = '';
        $messageFormInput.focus();
        // enable

        if (error) {
            return console.log(error);
        }

        console.log('Message delivered!')
    });
})

$sendLocationButton.addEventListener('click', () => {
    $sendLocationButton.setAttribute('disabled', 'disabled');

    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            setTimeout(() => {
                $sendLocationButton.removeAttribute('disabled', 'disabled');
            }, 200);
            console.log('Location shared!')
        })
    })
})
