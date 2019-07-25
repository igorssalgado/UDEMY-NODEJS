// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({ _id: new ObjectID("5d39e31a73255f1328a5a319") }, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }

    //     if (user === null){
    //         return console.log('Did not find any docs')
    //     }
    //     console.log(user);
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    db.collection('tasks').findOne({ _id: new ObjectID("5d39db54a013732980b27ca3")}, (error, task) => {
        if (error) {
            return console.log('Unable to find');
        }

        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) =>{
        if (error) {
            return console.log('Unable to find');
        }
        console.log(tasks);
    })
})