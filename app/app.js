'use strict';

angular.module('momentousApp', [
  'ngRoute',
  'momentousApp.users',
  'momentousApp.posts',
  'momentousApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  console.log($locationProvider)
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/users'});
}]);
