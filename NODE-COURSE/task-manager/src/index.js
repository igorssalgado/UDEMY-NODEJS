const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('Get requests are disable');
//     } else {
//         next();
//     }
// });

//Middleware for Maint mode
// app.use((req, res, next) => {
//     res.status(503).send('Server is currently down. check later.');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
//     // const task = await Task.findById('5d5754c6e92d4520940f975e');
//     // await task.populate('owner').execPopulate() //it is gonna 'go off', find the user associate with this task and task.owner will be their profile the entire document opose of just being the id
//     // console.log(task.owner);

//     const user = await User.findById('5d575df855b31004f050f29b');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);
//     console.log(user.name);
// }  

// main();