var {MongoClient, ObjectId} = require('mongodb');

var url = 'mongodb://localhost:27017';
var dbname = 'TodoApp';
var client = new MongoClient(url);

client.connect((err) => {
    if(err) {
        return console.log('unable to connect');
    }
    console.log('successfully connected to server');
    var db = client.db(dbuser);
    db.collection('Todos').find().toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        return console.log('Unable to read todos from database', err);
    });
})