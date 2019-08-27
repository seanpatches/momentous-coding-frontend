'use strict';

angular.module('momentousApp', [
  'ngRoute',
  'momentousApp.users',
  'momentousApp.posts',
  'momentousApp.version',
  'momentousApp.signup',
  'auth0.auth0',
  'ui.router'
]).config(config)

config.$inject = ['$stateProvider','$urlRouterProvider', '$locationProvider', 'angularAuth0Provider'];

function config($stateProvider, $urlRouterProvider, $locationProvider, angularAuth0Provider) {
    
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'index.html',
      controllerAs: 'vm'
    })
    .state('callback', {
      url: '/callback',
      controller: 'CallbackController',
      templateUrl: 'app/callback/callback.html',
      controllerAs: 'vm'
    });
  
  angularAuth0Provider.init({
    clientID: 'eWXTej7qSfYgH7W1MDEOInCDAl9FLrQw',
    domain: 'smnelsonn.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  $urlRouterProvider.otherwise('/');

};
