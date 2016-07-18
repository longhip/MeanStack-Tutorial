var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: {
		first:String,
		last: String
	},
	email: String,
	password: String,
	phone: String,
	status: {type: Boolean, default: false}
});

var User = mongoose.model('User', userSchema);

module.exports = User;
