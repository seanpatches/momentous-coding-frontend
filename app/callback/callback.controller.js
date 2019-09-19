(function () {

  'use strict';

  angular
    .module('app')
    .controller('CallbackController', callbackController);

  function callbackController() {}
  //see if userId from Auth0 is already in the database
  const currentUserId = localStorage.getItem('userId');
  $http.get('http://localhost:8888/users')
      .then(userList => {
        //check userList for a corresponding authID, if so obtain userDB info
      }, error => {
          console.log('Error: ' + data);
      });
  //if the authId is not associated with a dbUser, create a user in DB    
  // $http.post('http://localhost:8888/users')
  //     .then(function(data) {
  //         $scope.users = data;
  //     }, function(error) {
  //         console.log('Error: ' + data);
  //     });
})();