'use strict';

angular.module('myApp.show', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/show', {
    templateUrl: 'users/show.html',
    controller: 'showCtrl'
  });
}])

.controller('showCtrl', [function() {

}]);