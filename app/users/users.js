'use strict';
const userModule = angular.module('momentousApp.users', ['ngRoute']);

userModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/users', {
      templateUrl: 'users/users.html',
      controller: 'UsersCtrl'
    })
}]);

userModule.controller('UsersCtrl', function($scope, $http) {
  $scope.formData = {};
  $http.get('http://localhost:8888/users')
      .then(function(data) {
          $scope.users = data;
      }, function(error) {
          console.log('Error: ' + data);
      });
      window.MY_SCOPE = $scope;
    });