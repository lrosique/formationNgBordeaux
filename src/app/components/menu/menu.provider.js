(function() {
  'use strict';

  angular.module('af.menu')
    .provider('afMenu', AfMenuProvider);

  /**
   * @ngInject
   */
  function AfMenuProvider() {
    var self = this;
    var menuItems = [];

    this.addMenuItem = addMenuItem;
    this.$get = serviceConstructor;

    /**
     *
     * @param menuItem
     * @return {AfMenuProvider}
     */
    function addMenuItem(menuItem) {
      if(!angular.isObject(menuItem)){
        throw new Error('menuItem must be an object');
      }else {
        menuItems.push(menuItem);
      }
      return self;
    }

    /**
     *
     * @return {{menuItems: Array}}
     * @ngInject
     */
    function serviceConstructor() {
      return {
        menuItems: menuItems
      }
    }
  }
})();
