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
    const {name, email, bio} = $scope.formData;
    console.log(name, email)
    $http.post('http://localhost:8888/users', $scope.formData)
      .then(function(res){
        console.log(res.data)
      }), function(error){
        console.log('Error: ' + data)
      }
  }
  window.MY_SCOPE = $scope;
});