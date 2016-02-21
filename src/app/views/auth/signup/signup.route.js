(function() {
  'use strict';

  angular.module('af.auth')
    .config(signupConfig)

  /**
   *
   * @param $stateProvider
   * @ngInject
   */
  function signupConfig( $stateProvider) {
    $stateProvider.state('signup', {
      url: '/signup',
      parent: 'auth',
      templateUrl: 'app/views/auth/signup/signup.html',
      controller: 'SignupController as vm'
    })
  }
})();
