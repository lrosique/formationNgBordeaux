(function() {
  'use strict';

  angular.module('af.menu')
    .controller('MenuController', MenuController);

  /**
   *
   * @param afMenu
   * @constructor
   * @ngInject
   */
  function MenuController(afMenu) {
    var vm = this;
    vm.menuItems = afMenu.menuItems;
  }
})();
