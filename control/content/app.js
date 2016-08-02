'use strict';

(function (angular,buildfire) {
    angular.module('magentoEcommerceContent', ['ngRoute'])
        //injected ngRoute for routing
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/home.html',
                    controllerAs: 'ContentHome',
                    controller: 'ContentHomeCtrl'
                })
                .otherwise('/');
        }])
})(window.angular,window.buildfire);