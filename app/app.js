'use strict';

angular.module('momentousApp', [
  'ngRoute',
  'momentousApp.users',
  'momentousApp.posts',
  'momentousApp.version'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  
  $routeProvider.otherwise({redirectTo: '/users'});
  
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);
