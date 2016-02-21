(function() {
  'use strict';

  angular.module('af.form', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'formlyMaterial',
    'af.model'
  ])
    .config(formRouting);

  /**
   *
   * @param $stateProvider
   * @ngInject
   */
  function formRouting ($stateProvider) {
    $stateProvider.state('form', {
      url: '/form',
      parent: 'layout',
      views: {
        content: {
          controller: 'FormController as vm',
          templateUrl: 'app/views/layout/form/form.html'
        }
      }
    })
  }
})();
