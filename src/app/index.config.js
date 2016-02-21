(function() {
  'use strict';

  angular
    .module('formationNgBordeaux')
    .config(config);

  /**
   *
   * @param $logProvider
   * @param $urlRouterProvider
   * @param $locationProvider
   * @ngInject
   */
  function config($logProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    // Enable log
    $logProvider.debugEnabled(true);
    $locationProvider.html5Mode(true);
  }

})();
