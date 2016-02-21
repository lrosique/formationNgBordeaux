(function() {
  'use strict';

  angular.module('af.post', [
    'ngMaterial',
    'ui.router',
    'af.model'
  ])
    .config(postConfig);

  /**
   *
   * @param $stateProvider
   * @ngInject
   */
  function postConfig($stateProvider) {
    $stateProvider.state('post', {
      url: '/post/:id',
      parent: 'layout',
      views: {
        content: {
          templateUrl: 'app/views/layout/post/post.html',
          controller: "PostController as vm"
        }
      },
      resolve: {
        post: getPost
      }
    })
  }

  /**
   *
   * @param postModel
   * @param $stateParams
   * @ngInject
   */
  function getPost(postModel, $stateParams) {
    return postModel
      .find($stateParams.id)
      .then(function(post) {
        return postModel.loadRelations(post, ['comment']);
      })
  }
})();












