(function() {
  'use strict';

  angular.module('af.auth')
    .controller('SignupController', SignupController);

  /**
   *
   * @param $auth
   * @param $log
   * @param afSignupForm
   * @param $state
   * @constructor
   * @ngInject
   */
  function SignupController($auth, $log, afSignupForm, $state) {
    var vm = this;
    vm.signupForm = afSignupForm;
    vm.signup = signup;

    /**
     *
     * @param user
     * @return {Promise}
     */
    function signup(user) {
      return $auth.signup(user)
        .then(function(response) {
          $auth.me = response.user;
          $state.go('home');
        })
        .catch(function(err){
          $log.debug('error ', err)
        })
    }
  }

})();
