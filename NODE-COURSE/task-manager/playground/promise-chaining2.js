require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5d3f3e6ee453ad2cf4b69200').then((task) => {
    console.log(task);

    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})