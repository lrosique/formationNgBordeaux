(function() {
  'use strict';

  angular.module('af.form')
    .controller('FormController', FormController)

  /**
   *
   * @param postModel
   * @param $log
   * @param postForm
   * @constructor
   * @ngInject
   */
  function FormController(postModel, $log, postForm) {
    var vm = this;
    vm.submit = submit;
    vm.postForm = postForm;

    function submit() {
      if(vm.postForm.$valid) {
        postModel
          .create(vm.post)
          .then(function(createdPost) {
            $log.debug('creation success  ', createdPost);
          })
          .catch(function(err) {
            $log.debug('error  ', err);
          })
      }
    }
  }

})();
