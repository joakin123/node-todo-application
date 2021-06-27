const {MongoClient, ObjectId} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbname = 'TodoApp';

client.connect((err) => {
    if(err) {
        return console.log('Unable to connect to mongodb server..', err);
    }
    console.log('Connected to mongodb server.');
    const db = client.db(dbname);
    
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lanch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lanch'}).then(result => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
    //     console.log(result);
    // });

    //deleteMany from Users
    // db.collection('Users').deleteMany({name: 'Akinbode Joshua'}).then(result => {
    //     console.log(result);
    // });

    //findOneAndDelete from Users collection
    db.collection('Users').findOneAndDelete({_id: ObjectId("60470a360aaedf3de4072903")}).then(result => {
        console.log(result);
    });

    //db.close();
})