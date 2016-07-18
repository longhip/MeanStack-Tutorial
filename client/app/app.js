angular.module('MeanStackApp',
[
	'ui.router'
	
]).config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
    	.state('register', {
      		url: "/register",
      		templateUrl: "/client/view/register.view.html"
    	})
    	.state('login', {
      		url: "/login",
      		templateUrl: "/client/view/login.view.html"
    	});
});

