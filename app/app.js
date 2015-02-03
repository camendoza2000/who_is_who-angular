
(function() {
  var app = angular.module('myApp', []);

  app.controller('ShowUserController', ['$scope', '$http', function($scope, $http){
    $http.get("data/user_data.json").success(function(data){
      $scope.users = data;
    });
  }])

  /*app.controller('ShowInterestController', function(){
  	this.interests = interests_data;
  });*/

  app.controller('ShowInterestController', ['$scope', '$http', function($scope, $http){
    $http.get("data/interest_data.json").success(function(intetests_data){
      $scope.interests = intetests_data;
    });    
  }])


/* var interests_data = [
   {name: "punch giraffes", user_id: ["1"], id: "1"},
   {name: "flagelarse", user_id: ["2"], id: "2"},
   {name: "Ser una loncha de queso", user_id: ["2", "3"], id: "3"},
   {name: "nadar", user_id: ["4"], id: "4"}			
 ];*/

//  var data = angular.fromJson("user_data/user_data.json");

})();
