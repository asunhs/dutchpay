'use strict';

angular.module('dutchpayApp').controller('NavbarCtrl', function ($scope, $location, UserService) {
    
    UserService.isLogin(function (isLogin) {
        if (isLogin) {
            $scope.menu = [
                {
                    'title': 'Home',
                    'link': '/main'
                },
                {
                    'title' : 'Receipts',
                    'link' : '/receipts'
                },
                {
                    'title': 'Logout',
                    'link': '/user/logout'
                }
            ];
        } else {
            $scope.menu = [
                {
                    'title': 'Home',
                    'link': '/main'
                },
                {
                    'title': 'Login',
                    'link': '/user/login'
                }
            ];
        }
    });
    
    $scope.isActive = function(route) {
        return route === $location.path();
    };
});
