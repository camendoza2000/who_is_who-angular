'use strict';

/**
 * @ngdoc function
 * @name wiwApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wiwApp
 */
angular.module('wiwApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
