var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
const {todo, name} = require('./models/Todo');
//const {User} = require('./models/User');
// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         trim: true,
//         minLength: 1,
//         required: true
//     }
// });
var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body.text);
    var newTodo = new todo({
        text: req.body.text
    });

    newTodo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});

app.listen(3000, () => {
    console.log('started on port 3000');
});