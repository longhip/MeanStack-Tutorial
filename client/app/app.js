
angular.module('MeanStackApp',[]).controller('TodoController', function($scope, $http){

	$scope.todo = {
		name: '',
		status: false
	};

	$scope.index = function(){
		$http.get('http://localhost:6868/todo').success(function(response){
			if(response.status){
				$scope.todos = response.data;
			}
		});
	};

	$scope.store = function(){
		$http({
		  method: 'PUT',
		  url: 'todo',
		  data: $scope.todo
		}).success(function(response){
			if(response.status){
				$scope.todos.push(response.data);
			}
		});
	}

	$scope.addTodo = function(todo){
		if($scope.todos.indexOf(todo) == -1){
			$scope.todos.push(todo);
		}
	}

	$scope.removeTodo = function(todo){
		$scope.todos.splice($scope.todos.indexOf(todo), 2);
	}

});