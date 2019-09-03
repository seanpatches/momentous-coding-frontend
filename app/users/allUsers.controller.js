'use strict';

angular
.module('app')
.controller('AllUsersController', allUsersController)


function allUsersController($scope, $http) {
  $scope.formData = {};
  $http.get('http://localhost:8888/users')
      .then(function(data) {
          $scope.users = data;
      }, function(error) {
          console.log('Error: ' + data);
      });
  window.MY_SCOPE = $scope;
};