const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

var userOneId = new ObjectID();
var userTwoId = new ObjectID();

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
}, {
    _id: new ObjectID(),
    text: 'second test todo',
    completed: true,
    completedAt: 333
}];

const users = [{
    _id: userOneId,
    email: 'userOne@gmail.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'userTwo@gmail.com',
    password: 'userTwoPass'
}];

const populateTodos = (done) => {
    Todo.deleteMany({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};
const populateUsers = (done) => {
    User.deleteMany({}).then(() => {
         var userOne = new User(users[0]).save();
         var userTwo = new User(users[1]).save();

        return Promise.resolve([userOne, userTwo]);
    }).then(() => done());
};
module.exports = {todos, populateTodos, users, populateUsers};