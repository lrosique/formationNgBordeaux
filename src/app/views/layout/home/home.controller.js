(function() {
  'use strict';

  angular.module('af.home')
    .controller('HomeController', HomeController);

  /**
   *
   * @param $log
   * @param postModel
   * @constructor
   * @ngInject
   */
  function HomeController($log, postModel) {
    var vm = this;
    $log.debug('HomeController');
    vm.posts = postModel.getAll();
  }
})();
