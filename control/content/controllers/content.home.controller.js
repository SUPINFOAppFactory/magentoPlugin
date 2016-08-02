'use strict';

(function (angular, buildfire) {
  angular
    .module('magentoEcommerceContent')
    .controller('ContentHomeCtrl', ['$scope',
      function ($scope) {
        console.log('inside content home controller ----------------->');
        var ContentHome = this;
        var tmrDelay = null;
        ContentHome.hello = "helloWorld";
      }]);
})(window.angular, window.buildfire);