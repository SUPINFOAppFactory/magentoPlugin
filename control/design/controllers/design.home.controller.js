'use strict';

(function (angular, buildfire) {
  angular
    .module('magentoEcommerceDesign')
    .controller('DesignHomeCtrl', ['$scope',
      function ($scope) {
        console.log('inside content home controller ----------------->');
        var ContentHome = this;
        var tmrDelay = null;
        ContentHome.hello = "helloWorld";
      }]);
})(window.angular, window.buildfire);