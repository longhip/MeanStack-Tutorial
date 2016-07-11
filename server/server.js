var express = require('express');
var app 	= express();
var path    = require('path');

app.use('/client', express.static('../client'));
app.use('/node_modules', express.static('../node_modules'));

app.get('/', function(req, res){
	res.sendFile('index.html', { root:'../client/'});
});

app.listen(3000, function(){
	console.log('App listening in http://localhost:3000');
})