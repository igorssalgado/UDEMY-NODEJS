const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// mongoose.connect('mongodb+srv://udemy:m6urUIpoNHqZwkg6@cluster0-vdfow.mongodb.net/TaskManager?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// });


