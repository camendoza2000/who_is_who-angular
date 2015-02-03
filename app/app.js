
(function() {
  var app = angular.module('myApp', []);

  /*app.controller('ShowUserController', function(){
    this.users = users_data;
  });*/

  app.controller('ShowUserController', ['$scope', '$http', function($scope, $http){
    $http.get("data/user_data.json").success(function(data){
      $scope.users = data;
    });
  }])

  app.controller('ShowInterestController', function(){
  	this.interests = interests_data;
  });


/* var users_data = [
  {name: "Pancho", avatar: "images/1.jpg", id: "1" },
  {name: "Maria", avatar: "images/2.jpg", id: "2"},
  {name: "Concha", avatar: "images/3.jpg", id: "3"},
  {name: "Laura", avatar: "images/4.jpg", id: "4"}
 ];*/

 var interests_data = [
   {name: "punch giraffes", user_id: ["1"], id: "1"},
   {name: "flagelarse", user_id: ["2"], id: "2"},
   {name: "Ser una loncha de queso", user_id: ["2", "3"], id: "3"},
   {name: "nadar", user_id: ["4"], id: "4"}			
 ];

//  var data = angular.fromJson("user_data/user_data.json");

})();
