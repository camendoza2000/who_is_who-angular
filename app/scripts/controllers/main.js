'use strict';

/**
 * @ngdoc function
 * @name wiwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wiwApp
 */
angular.module('wiwApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
