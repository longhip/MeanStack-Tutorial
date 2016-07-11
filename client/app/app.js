
angular.module('MeanStackApp',[]).controller('TodoController', function($scope){

	$scope.todos = ['Long', 'Trung', 'Cường'];

	$scope.hello = 'Hello World';

	$scope.a = 5;
	$scope.b = 10;

	$scope.text= 'Hello World';

	$scope.addTodo = function(todo){
		if($scope.todos.indexOf(todo) == -1){
			$scope.todos.push(todo);
		}
	}

	$scope.removeTodo = function(todo){
		$scope.todos.splice($scope.todos.indexOf(todo), 2);
	}


});