const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const dbname = 'TodoApp';

client.connect((err) => {
    if(err) {
        return console.log('Unable to connect to mongo database.', err);
    }
    console.log('Server up and running.');
    const db = client.db(dbname);
    // db.collection('Todos').find({
    //     _id : new ObjectID("6044ccba6294571970df62be")
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, err => {
    //     console.log('Unable to fetch todos', err);
    // });

    //Count method
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, err => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: "Akinbode Joshua"}).toArray().then((docs) => {
        console.log('Users'),
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to retrieve data from Todos', err);
    });

    //client.close();

});
// const {MongoClient, ObjectID} = require('mongodb');
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if(err){
//         return console.log('Unable to MongoDB Server');
//     }
//     console.log('Connection successfull');
//     db.collection('Todos').find().toArray.(docs => {
//         console.log('Todos');
//         console.log(JSON.stringify(docs, undefined, 2));
//     }, err => {
//         console.log('Unable to fetch todos', err);
//     })
//     db.close();
// })