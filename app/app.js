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

var app = angular.module("myApp", []);
	
 (function(){
	app.controller('showUsersController', function(){
		this.users = data
		
	});

	// var data = angular.fromJson(app/user_data/user_data.json);

   var data= [
				{name: "Pancho", avatar: "app/images/1.jpg", interests: "punch giraffes", id: "1"},
				{name: "Maria", avatar: "app/images/2.jpg", interests: "flagelarse", id: "2"},
				{name: "Concha", avatar: "app/images/3.jpg", interests: "ser una loncha de queso", id: "3"},
				{name: "Laura", avatar: "app/images/4.jpg", interests: "nadar", id: "4"}
			];

 })();