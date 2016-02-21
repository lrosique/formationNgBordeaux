(function() {
  'use strict';

  angular.module('af.auth')
    .config(loginConfig)

  /**
   *
   * @param $stateProvider
   * @ngInject
   */
  function loginConfig( $stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      parent: 'auth',
      templateUrl: 'app/views/auth/login/login.html',
      controller: 'LoginController as vm'
    })
  }
})();
