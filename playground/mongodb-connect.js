//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');
const assert = require('assert');

const obj = new ObjectId();
const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

const client = new MongoClient(url);

var user = {name: 'josh', age: 34};
var {name, age} = user;
console.log(name, age);

client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);

    /*db.collection('Todos').insertOne({
        text: 'Something to do',
        complete: false
    }, (err, result) => {
        if(err) { 
            return console.log('unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/
    /*db.collection('Users').insertOne({
        name: 'Akinbode Joshua',
        age: '21',
        location: 'Nigeria'
    }, (err, result) => {
        if(err) {
            return console.log('unable to insert user details', err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    });
    client.close();*/
  });

