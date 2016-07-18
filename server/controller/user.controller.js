var User = require('../model/user.model');
var bcrypt = require('bcrypt-nodejs');

var field = {
	password:0
}

var UserController = {

	index: function(req, res){
		User.find(field, function(err, results){
			if(err){
				res.json({status: false, data: [], message: err});
			} else {
				res.json({status: true, data: results, message: ''});
			}
		});
	},

	store: function(req, res){
		User.find({email: req.body.email}).count(function(err, count){
			if(count == 0){
				var data = {
					name: {
						first: req.body.name.first,
						last: req.body.name.last
					},
					email: req.body.email,
					password: bcrypt.hashSync(req.body.password),
					phone: req.body.phone,
				}
				var user = new User(data);
				user.save(function(err, result){
					if(err){
						res.json({status: false, data: [], message: err});
					} else {
						res.json({status: true, data: result, message: 'Create user success'});
					}
				});
			} else {
				res.json({status: false, data: [], message: 'Email already exists'});
			}
		})
	},

	show: function(req, res){
		User.findOne({_id: req.params.id}, field, function(err, result){
			if(err){
				res.json({status: false, data: [], message: err});
			} else {
				res.json({status: true, data: result, message: ''});
			}
		});
	},

	update: function(req, res){
		User.findOne({_id: req.params.id}, field, function(err, result){
			if(err){
				res.json({status: false, data: [], message: err});
			} else {
				result.name = req.body.name;
				result.email = req.body.email;
				result.password = bcrypt.hashSync(req.body.password);
				result.phone = req.body.phone
				result.save(function(err, saveResult){
					if(err){
						res.json({status: false, data: [], message: err});
					} else {
						res.json({status: true, data: saveResult, message: 'Update user success'});
					}
				});
			}
		});
	},

	destroy: function(req, res){
		User.findOneAndRemove({_id: req.params.id}, field, function(err, result){
			if(err){
				res.json({status: false, data: [], message: err});
			} else {
				res.json({status: true, data: saveResult, message: 'Remove user success'});
			}
		});
	},

	check: function(req, res){
		User.find({email: req.params.email}).count(function(err, count){
			if(count == 0){
				res.json({status: true, data: {}, message: 'Email invalid'});
			} else {
				res.json({status: false, data: [], message: 'Email already exists'});
			}
		})
	}

}

module.exports = UserController;