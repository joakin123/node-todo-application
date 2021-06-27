const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// var id = '60c05e514a8ac528bcaf56b711';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:', todo);
// });

// if(!ObjectID.isValid(id)) {
//     console.log('Id is not valid.');
// };

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('id not found');
//     }
//     console.log('Todo by id', todo)
// }).catch((e) => {
//     console.log(e);
// });

var id = '60b8700d81899b154c11cc05';

User.findById(id).then((user) => {
    if(!user) {
        return console.log('User ID does not exist');
    }
    console.log('User by id:', user);
}).catch((err) => {
    console.log('Invalid user ID')
})