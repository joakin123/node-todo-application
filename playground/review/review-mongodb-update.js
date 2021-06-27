var {MongoClient, ObjectId} = require('mongodb');

var url = 'mongodb://localhost:27017';
var dbname = 'TodoApp';
var client = new MongoClient(url);

client.connect(err => {
    if(err) {
        return console.log('Unable to connect to mongo server.');
    }
    console.log('Connection to mongo database successful.');

    var db = client.db(dbname);
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId('60afcb960c99794d303d3e2e')
    }, {
        $set: {
            complete: true
        }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    })
})