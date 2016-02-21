(function() {
  'use strict';
  angular.module('af.auth')
    .factory('afLoginForm', loginForm);

  /**
   * @ngInject
   */
  function loginForm() {
    return [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'email',
          required: 'email',
          type: 'email'
        },
        validation: {
          messages: {
            email: function(viewValue) {
              return viewValue + ' is not a valid email';
            }
          }
        }
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          label: 'password',
          required: 'password',
          type: 'password'
        }
      }
    ];
  }
})();
