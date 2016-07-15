var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	name: String,
	status: {type: Boolean, default: false}
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;