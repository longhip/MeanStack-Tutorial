angular.module('MeanStackApp').controller('RegisterController', RegisterController);

function RegisterController ($scope, $http, $timeout){

	$scope.userRegistration = {
		name: {
			first:null,
			last: null,
		}, 
		email: null,
		password: null,
		phone: null,
	};

	$scope.registerStatus = {
		success: false,
		errors: false
	};

	$scope.submited = false;

	$scope.blured = false;

	$scope.emailStatus = false;

	$scope.register = function(){
		$scope.submited = true;
		$http({
		  	method: 'POST',
		  	url: '/user',
		  	data: $scope.userRegistration
		}).success(function(response){
			if(response.status){
				$scope.registerStatus.success = true;
				$scope.userRegistration = {
					name: {
						first:null,
						last: null,
					}, 
					email: null,
					password: null,
					phone: null,
				};
			} else {
				$scope.registerStatus.errors = true;
			}
		})
	}

	$scope.checkEmail = function(){
		if($scope.userRegistration.email){
			$scope.blured =  true;
			$http({
			  	method: 'GET',
			  	url: '/user/check/' + $scope.userRegistration.email,
			}).success(function(response){
				if(response.status){
					$scope.emailStatus = true;
				} else {
					$scope.emailStatus = false;
				}
			})
		}
	}
}