'use strict';

angular.module('firstApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
