require('../src/db/mongoose');
const User = require('../src/models/user');

// 5d3f41e530b88e29aca81284
// 5d3f41ec30b88e29aca81285

User.findByIdAndUpdate('5d3f41ec30b88e29aca81285', { age: 1 }).then((user) => {
    console.log(user);

    return User.countDocuments({ age: 1 });
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})