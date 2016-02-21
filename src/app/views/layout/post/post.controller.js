(function() {
  'use strict';
  angular.module('af.post')
    .controller('PostController', PostController);

  /**
   *
   * @param postModel
   * @param $stateParams
   * @constructor
   * @ngInject
   */
  function PostController(postModel, $stateParams) {
    var vm = this;
    vm.post = postModel.get($stateParams.id);
  }

})();
