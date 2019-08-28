const signupModule = angular.module('momentousApp.signup', ['ngRoute']);
import {signup} from '../services/auth';

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
    const {email, password, username} = $scope.formData;
    
    signup(email, password, username)

    // $http.post('http://localhost:8888/users', $scope.formData)
    //   .then(function(res){
    //     console.log(res.data)
    //   }), function(error){
    //     console.log('Error: ' + data)
    //   }
  }
  window.MY_SCOPE = $scope;
});