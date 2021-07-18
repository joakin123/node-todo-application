const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('60e7476cbb130ac8d92739af').then((result) => {
    console.log(result);
});