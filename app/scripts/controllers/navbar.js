'use strict';

angular.module('dutchpayApp').controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
        {
            'title': 'Home',
            'link': '/'
        },
        {
            'title': 'login',
            'link': '#/user'
        }
    ];
    
    $scope.isActive = function(route) {
        return route === $location.path();
    };
});
