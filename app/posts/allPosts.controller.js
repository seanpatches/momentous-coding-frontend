(function () {

  'use strict';

  angular
    .module('app')
    .controller('AllPostsController', allPostsController);

  allPostsController.$inject = ['authService'];

  function allPostsController(authService) {

    var vm = this;
    vm.auth = authService;

  }

})();