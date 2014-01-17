'use strict';

angular.module('dutchpayApp').controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
        {
            'title': 'Home',
            'link': '/main'
        },
        {
            'title': 'login',
            'link': '/login'
        }
    ];
    
    $scope.isActive = function(route) {
        return route === $location.path();
    };
});
