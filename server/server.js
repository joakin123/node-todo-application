require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectId} = require('mongodb');



var app = express();
const port = process.env.PORT;

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
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(404).send('Id is not valid');
    }

    Todo.findByIdAndRemove(id).then(todo => {
        if(!todo) {
            return res.status(404).send('There is no todo with the specified ID');
        }
        res.send({todo});
    }).catch((e) => {
        return res.status(400).send(e);
    }); 
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body =  _.pick(req.body, ['text', 'completed']);
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    }else {
        body.completed = false;
        body.completedAt = null;
    } 
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.status(200).send({todo});
    }).catch((e) => res.send());
})

app.listen(port, () => {
    console.log(`Starting on port ${port}`);
});

module.exports = {app};

