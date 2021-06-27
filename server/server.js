var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectId} = require('mongodb');



var app = express();
const port = process.env.PORT || 3000;

//configutation of the middleware
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send({
        name: 'Akinbode'
    })
})
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, e => {
        res.status(400).send(e);
    });
});

app.post('/users', (req, res) => {
    console.log('User route', req.body.text);
    var user = new User({
        email: req.body.email
    });

    user.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, e => {
        res.status(400).send(e);
    });
})

//to get a todo by id

app.get('/todos/:id', (req, res) => {
    var userId = req.params.id;
    if(!ObjectID.isValid(userId)) {
        return res.status(404).send('Id is not valid');
    }

    Todo.findById(userId).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        //this line below return and aboject todo so that more properties can be added
        res.send({todo});
    }, (e) => {
        res.status(404).send();
    })
})

app.listen(port, () => {
    console.log(`Starting on port ${port}`);
});

module.exports = {app};

