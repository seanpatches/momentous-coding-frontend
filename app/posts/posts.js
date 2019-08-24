'use strict';

angular.module('momentousApp.posts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/posts', {
    templateUrl: 'posts/posts.html',
    controller: 'PostsCtrl'
  });
}])

.controller('PostsCtrl', [function() {

}]);