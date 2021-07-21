const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123!';
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});
var hashPassword = '$2a$10$jSypYt9SXf0A.HysMoCgne.zsp4UcHyWt9FZ9qZ.j4usyey2HusW6';
bcrypt.compare(password, hashPassword, (err, res) => {
    console.log(res);
});
// var data = {
//     id: 10
// }
// var token = jwt.sign(data, 'abc123');
// console.log(token);
// var decoded = jwt.verify(token, 'abc123');
// console.log('Decoded', decoded);
// var message = "I am using number 3";
// var hash = SHA256(message).toString();
// console.log(`Message: ${message}`);
// console.log(`HASH: ${hash}`);

// var data = {
//     id: '12345'
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
// var hashResult = SHA256(JSON.stringify(data) + 'somesecret').toString();
// if (hashResult === token.hash) {
//     console.log('Data was not changed');
// }else {
//     console.log('Data was changed, don\'t trust');
// }