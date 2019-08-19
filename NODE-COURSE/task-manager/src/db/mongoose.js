const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://udemy:m6urUIpoNHqZwkg6@cluster0-vdfow.mongodb.net/TaskManager?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
});


