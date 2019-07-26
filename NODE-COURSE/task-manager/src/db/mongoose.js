const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
   name: {
       type: String
   },
   age: {
       type: Number
   }
});

const Task = mongoose.model('Task', {
    descripion: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const task = new Task({
    descripion: "feed the dogs",
    completed: true
});

task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log('Error to save task!', error)
});

// const me = new User({
//     name: 'Igor',
//     age: 27
// });

// me.save().then(() => {
//     console.log(me);
// }).catch((error) =>{
//     console.log('Error!', error)
// })