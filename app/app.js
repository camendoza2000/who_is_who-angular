// 'use strict';

// // Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.show',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/show'});
// }]);

(function(){
	var app = angular.module("myApp", []);
	app.controller('showUsersController', function(){
		this.users = data;
		
	});

	var data = angular.fromJson(app/user_data/user_data.json);

})();