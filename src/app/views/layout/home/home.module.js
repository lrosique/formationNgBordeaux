/*eslint no-unused-vars:0*/
(function() {
  'use strict';

  angular.module('af.home', [
    'ui.router',
    'ngMaterial',
    'af.model'
  ])
    .config(homeRouting);

  /**
   *
   * @param $stateProvider
   * @ngInject
   */
  function homeRouting ($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      parent: 'layout',
      views: {
        content: {
          controller: 'HomeController as vm',
          templateUrl: 'app/views/layout/home/home.html'
        }
      },
      resolve: {
        postList: getPostList
      }
    })
  }

  /**
   *
   * @param postModel
   * @ngInject
   */
  function getPostList(postModel, commentModel) {
    return postModel.findAll();
  }

})();
