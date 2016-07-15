var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var path = require('path');

var TodoController = require('./controller/todo.controller');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/meanstack_tutorial');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/todo', TodoController.index);
app.post('/todo', TodoController.store);
app.get('/todo/:id', TodoController.show);
app.put('/todo/:id', TodoController.update);
app.delete('/todo/:id', TodoController.destroy);



app.use('/client', express.static('../client'));
app.use('/node_modules', express.static('../node_modules'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {
        root: '../client/'
    });
});

app.listen(6868, function() {
    console.log('App listening in http://localhost:6868');
})