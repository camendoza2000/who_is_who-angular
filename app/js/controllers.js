
(function() {
  var app = angular.module('myApp', []);

  app.controller('ShowUserController', ['$scope', '$http', function($scope, $http){
    $http.get("data/user_data.json").success(function(data){
      $scope.users = data;
    });
  }])

  
  app.controller('ShowInterestController', ['$scope', '$http', function($scope, $http){
    $http.get("data/interest_data.json").success(function(intetests_data){
      $scope.interests = intetests_data;
    });    
  }])



})();
