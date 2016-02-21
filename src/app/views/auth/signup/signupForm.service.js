(function() {
  'use strict';

  angular.module('af.auth')
    .factory('afSignupForm', signupForm);

  /**
   *
   * @param afLoginForm
   * @param $http
   * @param formlyValidationMessages
   * @return {*}
   * @ngInject
   */
  function signupForm(afLoginForm, $http, formlyValidationMessages) {

    formlyValidationMessages.addTemplateOptionValueMessage('emailexist', 'emailexist', 'email address', 'is already taken', 'email is taken');
    formlyValidationMessages.addTemplateOptionValueMessage('samepassword', 'samepassword', 'The password', 'did not match', 'required');

    var signupForm = angular.copy(afLoginForm);
    signupForm.push({
      key: 'repeatPassword',
      type: 'input',
      templateOptions: {
        label: 'Repeat your password',
        required: true,
        type: 'password'
      },
      validators: {
        samepassword: function(viewValue, modelValue, $scope) {
          var val = viewValue || modelValue;
          return val === $scope.model.password;
        }
      }
    });
    signupForm.find(function(item) {
      return item.key == 'email'
    }).asyncValidators = {
      emailexist : function(viewValue, modelValue) {
        var val = viewValue || modelValue;
        return $http.get('http://localhost:3000/isAvailable/'+val)
      }
    };
    return signupForm;
  }
})();
