const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

// Model

const Task = mongoose.model('Task', {
    descripion: {
        type: String,
        requried: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});
// Model



