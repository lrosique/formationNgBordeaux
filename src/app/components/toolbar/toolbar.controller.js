(function() {
  'use strict';

  angular.module('af.toolbar')
    .controller('ToolbarController', ToolbarController);

  /**
   *
   * @param $auth
   * @param $mdSidenav
   * @param $state
   * @constructor
   * @ngInject
   */
  function ToolbarController($auth, $mdSidenav, $state) {
    var vm = this;
    vm.toggleAside = toggleAside;
    vm.logout = logout;

    function toggleAside() {
      $mdSidenav('menu').toggle();
    }

    function logout() {
      $auth.logout();
      $state.go('login');
    }
  }
})();
