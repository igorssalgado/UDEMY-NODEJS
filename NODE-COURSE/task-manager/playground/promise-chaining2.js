require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5d3f3e6ee453ad2cf4b69200').then((task) => {
//     console.log(task);

//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCount('5d3f3e77e453ad2cf4b69201').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})