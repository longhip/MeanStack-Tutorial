var Todo = require('../model/todo');

var TodoController = {

	index: function(req, res){
		Todo.find(function(err, results){
			if(err){
				res.json({status: false, data: [], message: err});
			} else {
				res.json({status: true, data: results, message: 'get todos success'});
			}
		});
	},

	store: function(req, res){
		console.log(req.body);
		var name = req.body.name || '';
		if(name){
			var data = {
				name: name
			};
			var todo = new Todo(data);
			todo.save(function(err, result){
				if(err){
					res.json({status: false, data: [], message: err});
				} else {
					res.json({status: true, data: result, message: 'create todo success'});
				}
			});
		} else {
			res.json({status: false, data: [], message: 'Validate failed'});
		}
	},

	show: function(req, res){
		var id = req.params.id;
		Todo.find({_id:id}, function(err, result){
			if(err){
				res.json({status: false, data: [], message: err});
			} else {
				res.json({status: true, data: result, message: 'create todo success'});
			}
		})
	},

	update: function(req, res){

		var id = req.params.id;
		Todo.findOne({_id:id}, function(err, result){
			if(err){
				res.json({status: false, data: [], message: err});
			} else {
				result.name = req.body.name;
				result.save(function(err, saveResult){
					if(err){
						res.json({status: false, data: [], message: err});
					} else {
						res.json({status: true, data: saveResult, message: 'update todo success'});
					}
				})
			}
		})
	},

	destroy: function(req, res){

		var id = req.params.id;
		Todo.findOneAndRemove({_id:id}, function(err, result){
			if(err){
				res.json({status: false, data: [], message: err});
			} else {
				res.json({status: true, data: {}, message: 'remove todo success'});
			}
		})
	}

}

module.exports  = TodoController;