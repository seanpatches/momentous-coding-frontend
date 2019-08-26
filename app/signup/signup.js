const signupModule = angular.module('momentousApp.signup', ['ngRoute']);

signupModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/signup', {
      templateUrl: 'signup/signup.html',
      controller: 'SignupCtrl'
    });
}]);

signupModule.controller('SignupCtrl', function($scope, $http) {
  console.log('got to right controller')
  $scope.formData = {};
  $scope.signupSubmit = function(){
    console.log('hi')
  }
  window.MY_SCOPE = $scope;
});