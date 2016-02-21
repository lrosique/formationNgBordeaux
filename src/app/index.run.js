(function() {
  'use strict';

  angular
    .module('formationNgBordeaux')
    .run(runBlock);

  /**
   *
   * @param $log
   * @param $rootScope
   * @param formlyValidationMessages
   * @ngInject
   */
  function runBlock($log, $rootScope, formlyValidationMessages) {
    formlyValidationMessages.addTemplateOptionValueMessage('required', 'required', 'The field', 'is required', 'required');

    /*eslint angular/on-watch:0*/
    $rootScope
      .$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        $log.error(error);
      });

    $log.debug('runBlock end');
  }

})();
