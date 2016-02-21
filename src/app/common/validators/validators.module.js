(function() {
  'use strict';

  angular.module('af.validators', [])
    .directive('samePassword' , samePassword)
    .directive('emailExist', emailExist);

  /**
   *
   * @return {{restrict: string, require: string, scope: {compareTo: string}, link: Function}}
   * @ngInject
   */
  function samePassword() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        compareTo: '='
      },
      link: function(scope, element, attrs, ngModel) {
        ngModel.$validators.difPassword = function(viewValue, modelValue) {
          var val = viewValue || modelValue;
          return val === scope.compareTo;
        }
      }
    }
  }

  /**
   *
   * @param $http
   * @return {{restrict: string, require: string, scope: {}, link: Function}}
   * @ngInject
   */
  function emailExist($http) {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {},
      link: function(scope, element, attrs, ngModel) {
        ngModel.$asyncValidators.emailExist = function(viewValue, modelValue) {
          var val = viewValue || modelValue;
          return $http.get('http://localhost:3000/isAvailable/'+val)
        }
      }
    }
  }
})();
