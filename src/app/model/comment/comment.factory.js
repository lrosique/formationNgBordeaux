(function() {
  'use strict';

  angular.module('af.model')
    .factory('commentModel', commentModel);

  /**
   *
   * @param DS
   * @return {*}
   * @ngInject
   */
  function commentModel (DS) {
    return DS.defineResource({
      name: 'comment',
      idAttribute: 'id',
      endpoint: 'comment',
      relations: {
        belongTo: {
          post: {
            localField: 'post',
            localKey: 'postId'
          }
        }
      }
    })
  }
})();
