'use strict';

/* App Module */

(function() {

  var wiwApp = angular.module('wiwApp', [
    'ngRoute',
    'myApp'
  ]);
  
  
  wiwApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/app', {
          templateUrl: 'partials/user_grid.html',
          controller: 'ShowUserController'
        }).
        when('/users/:userId', {
          templateUrl: 'partials/show.html',
          controller: 'PhoneDetailCtrl'
        }).
        otherwise({
          redirectTo: '/app'
        });
    }]);
  
})();
