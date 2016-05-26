'use strict';

angular.module('crud')
  .directive('navbar', function () {
    return {
      restrict: 'EA',
      link: function (scope, element) {
        element.text('navbar directive');
      }
    };
  });
