'use strict';

(function (angular) {
    angular
        .module('magentoEcommerceWidget')
        .controller('WidgetHomeCtrl', ['$scope',
            function ($scope) {
                var WidgetHome = this;
                WidgetHome.hello = "hello World Widget";
            }]);
})(window.angular);