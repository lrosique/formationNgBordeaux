(function() {
  'use strict';

  angular.module('af.auth', [
    'ngMaterial',
    'ui.router',
    'satellizer',
    'af.validators',
    'formlyMaterial'
  ])
    .config(authConfig)
    .constant('afAuthConfig', {
      baseUrl: 'http://localhost:3000'
    });
  /**
   *
   * @param $authProvider
   * @ngInject
   */
  function authConfig($authProvider, afAuthConfig, $stateProvider) {
    angular.extend($authProvider, afAuthConfig);
    $stateProvider.state('auth', {
      url: '',
      abstract: true,
      templateUrl: 'app/views/auth/auth.html',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
  }

  /**
   *
   * @param $auth
   * @param $q
   * @param $location
   * @ngInject
   */
  function skipIfLoggedIn($auth, $q, $location) {
    return $q(function(resolve) {
      if ($auth.isAuthenticated()) {
        $location.path('/home');
      } else{
        resolve();
      }
    })
  }

})();
