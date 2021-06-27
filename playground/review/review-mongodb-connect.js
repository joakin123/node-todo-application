const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';
var dbname = 'TodoApp';
var client = new MongoClient(url);

client.connect((err) => {
   if(err) {
       return console.log('Unable to connect to the datatbase');
   } 
   console.log('connection to database was successful');
   var db = client.db(dbname);
   db.collection('Users').insertOne({
        name: 'Akinwole Ogooluwa',
        age: 11,
        location: '28 Imoleayo adelanwa'
   },(err, result) => {
        if(err) {
            return console.log('Unable to insert user info')
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
   });
   client.close();
});