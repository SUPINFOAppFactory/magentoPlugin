'use strict';
(function (angular) {
    angular
        .module('magentoEcommerceWidget', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/home.html',
                    controllerAs: 'WidgetHome',
                    controller: 'WidgetHomeCtrl',
                })
                .otherwise('/');
        }])
})(window.angular);
