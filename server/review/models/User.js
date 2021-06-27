var mongoose = require('mongoose');

var user = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        required: true,
        minLength: 1
    }
});

module.export = {user};