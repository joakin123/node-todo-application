const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send({
        message: 'It is up and running'
    });
});

app.listen(3000);