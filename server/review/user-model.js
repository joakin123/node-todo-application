var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var user = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        require: true,
        minLength: 1
    }
});

var newUser = new user({
    email: ' akinbodejoshua145@gmail.com  '
});

newUser.save().then((doc) => {
    console.log(doc);
}, (e) => {
    console.log('unable to save user to database.', e)
})