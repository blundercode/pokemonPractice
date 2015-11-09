var app = angular.module('pokeApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'app/homeTmplt.html',
      controller: 'homeCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    })
});