var {MongoClient, ObjectId} = require('mongodb');

var url = 'mongodb://localhost:27017';
var dbname = 'TodoApp';
var client = new MongoClient(url);

client.connect(err => {
    if(err) {
        return console.log('Unable to connect to Mongo Server');
    }
    console.log('Successfully Connected to Mongo Server');
    var db = client.db(dbname);
    // db.collection('Users').findOneAndDelete({
    //    name: 'Akinwole Ogooluwa' 
    // }).then((err, result) => {
    //     if(err) {
    //         return console.log(err);
    //     }
    //     console.log(result);
    // });
    db.collection('Users').deleteOne({
        _id : new ObjectId('60b1d258c7ae90e645ff58d1')
    }).then(result => {
        console.log(result.result);
    })
});