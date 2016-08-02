'use strict';

(function (angular, buildfire) {
  angular.module('magentoEcommerceDesign', ['ngRoute'])
    //injected ngRoute for routing
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'templates/home.html',
          controllerAs: 'DesignHome',
          controller: 'DesignHomeCtrl'
        })
        .otherwise('/');
    }])
})(window.angular, window.buildfire);