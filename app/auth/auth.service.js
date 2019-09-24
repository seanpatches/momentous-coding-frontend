(function () {

  'use strict';

  angular
    .module('app')
    .service('authService', authService);

  authService.$inject = ['$state', 'angularAuth0', '$timeout', '$http'];

  function authService($state, angularAuth0, $timeout, $http) {

    var accessToken;
    var idToken;
    var expiresAt;

    function getIdToken() {
      return idToken;
    }

    function getAccessToken() {
      return accessToken;
    }

    function login() {
      angularAuth0.authorize();
    }

    function getUserInfo(authResult) {
      angularAuth0.client.userInfo(authResult.accessToken, (err, profile) => {
        if(profile) {
          const authUser = {
            name: profile.nickname,
            email: profile.email,
            authid: profile.sub,
            userImage: profile.picture
          };
          
          let userFound = false;
          $http.get('http://localhost:8888/users')
          .then(userList => {
            console.log('entering userList')
            userList.data.forEach(user=> {
              if(authUser.authid === user.authid){
                console.log('Found a user already made in database')
                userFound = true;
                return;
              };
            })
            , error => {
              console.log('Error: ' + error);
            };
          })
          .then(() => {
            console.log(userFound)
            if(!userFound) {
              console.log('User not found, attempting to post')
              $http.post('http://localhost:8888/users', authUser)
                .then(function(res){
                  console.log(res);
                  console.log(authUser)
                }), function(error){
                  console.log('Error: ' + error)
                };
            }
          })
        }
      })
    }

    function handleAuthentication() {
      angularAuth0.parseHash(function(err, authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
          getUserInfo(authResult);
          localLogin(authResult);
          localStorage.setItem('userId', authResult.idTokenPayload.sub);
          $state.go('home');
        } else if (err) {
          $timeout(function() {
            $state.go('home');
          });
          console.log(err);
          alert('Error: ' + err.error + '. Check the console for further details.');
        }
      });
    }


    function localLogin(authResult) {
      // Set isLoggedIn flag in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      // Set the time that the access token will expire at
      expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
      accessToken = authResult.accessToken;
      idToken = authResult.idToken;
    }

    function renewTokens() {
      angularAuth0.checkSession({},
        function(err, result) {
          if (err) {
            console.log(err);
          } else {
            localLogin(result);
          }
        }
      );
    }

    function logout() {
      // Remove isLoggedIn flag from localStorage
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userProfile');
      // Remove tokens and expiry time
      accessToken = '';
      idToken = '';
      expiresAt = 0;

      angularAuth0.logout({
        returnTo: window.location.origin
      });

      $state.go('home');
    }

    function isAuthenticated() {
      // Check whether the current time is past the 
      // access token's expiry time
      return localStorage.getItem('isLoggedIn') === 'true' && new Date().getTime() < expiresAt;
    }

    return {
      login: login,
      getIdToken: getIdToken,
      getAccessToken: getAccessToken,
      handleAuthentication: handleAuthentication,
      logout: logout,
      isAuthenticated: isAuthenticated,
      renewTokens: renewTokens
    }
  }
})();
