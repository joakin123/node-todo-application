const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbname = 'TodoApp';

client.connect((err) => {
    if(err) {
        return console.log('Unable to connect to server');
    }
    console.log('connected to server');
    const db = client.db(dbname);

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('60519e35026baaa637d572ca')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('6045bc124ef31f0994c54a4a')
    }, {
        $set: {
            name: 'Akinwole Ayooluwa'
        }, $inc: {
            age: 13
        }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    });
});