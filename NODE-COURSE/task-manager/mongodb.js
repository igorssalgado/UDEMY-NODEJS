// CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Igor',
    //     age: 27
    // },(error, result) => {
    //     if (error){
    //         return console.log('Unable to insert user!');
    //     }

    //     console.log(result.ops);
    //     console.log(result.insertedCount);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user!');
    //     }
        
    //     console.log(result.ops);
    //     // console.log(result.insertedCount);
    //     // console.log(result.insertedIds)
    // })

    db.collection('tasks').insertMany([
        {
            description: "description is a description",
            completed: true
        },{
            description: "this description is another description",
            completed: false
        },{
            description: "wow a new description which is a description",
            completed: false
        }
    ], (error, result) => {
            if (error){
                return console.log("Unable to insert task!");
            }

            console.log(result.ops);
    })
})