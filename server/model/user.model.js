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

module.exports = Todo;

// YC: password: ma hoa, email: unique. show: name, email, phone. (https://www.npmjs.com/package/bcrypt-nodejs)
