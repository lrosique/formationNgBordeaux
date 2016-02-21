(function() {
  'use strict';

  angular.module('af.auth')
    .controller('LoginController', LoginController);

  /**
   *
   * @param $auth
   * @param $log
   * @param $state
   * @param afLoginForm
   * @constructor
   * @ngInject
   */
  function LoginController($auth, $log, $state, afLoginForm) {
    var vm = this;
    vm.loginForm = afLoginForm;
    vm.login = login;

    /**
     *
     * @param user
     * @return {Promise}
     */
    function login(user) {
      return $auth.login(user)
        .then(function(data) {
          $auth.me = data.user;
          $state.go('home');
          $log.debug('success', data);
        })
        .catch(function(err) {
          $log.debug('error ', err);
        })
    }
  }
})();
