(function() {
  'use strict';

  angular.module('af.model')
    .factory('postForm', postForm);

  /**
   *
   * @return {*[]}
   */
  function postForm() {
    return [
      {
        key: 'title',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Title',
          required: 'title'
        }
      },
      {
        key: 'body',
        type: 'textarea',
        templateOptions: {
          label: 'Body',
          required: 'body'
        }
      }
    ]
  }
})();
