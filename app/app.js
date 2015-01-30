
(function() {
  var app = angular.module('myApp', []);

  app.controller('ShowUserController', function(){
    this.users = data;
  });

  var data = [
    {name: "Pancho", avatar: "images/1.jpg", interests: "punch giraffes", id: "1" },
    {name: "Maria", avatar: "images/2.jpg", interests: "flagelarse", id: "2"},
  	{name: "Concha", avatar: "images/3.jpg", interests: "ser una loncha de queso", id: "3"},
  	{name: "Laura", avatar: "images/4.jpg", interests: "nadar", id: "4"}
  ];
  
})();
