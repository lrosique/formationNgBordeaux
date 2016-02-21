(function() {
  'use strict';

  angular.module('af.menu', [
    'ngMaterial',
    'ui.router'
  ])
    .component('afMenu', {
      templateUrl: 'app/components/menu/menu.html',
      controller: 'MenuController as vm'
    })

})();
