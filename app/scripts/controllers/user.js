'use strict';

angular.module('dutchpayApp').controller('UserCtrl', function ($scope, $location, $route, UserService) {
    
    UserService.isLogin(function (isLogin) {
        if (isLogin) {
            $location.url('/');
        }
    });
    
    if ($route.current.pathParams.action === 'logout') {
        UserService.logout();
    }
    
    $scope.regMode = false;
    
    function login() {
        UserService.login(
            {
                id : $scope.id,
                password : $scope.password
            },
            null,
            function () {
                $scope.id = '';
                $scope.password = '';
            }
        );
    }
    
    function register() {
        UserService.register(
            {
                id : $scope.id,
                nick : $scope.nick,
                password : $scope.password
            },
            null,
            function () {
                $scope.id = '';
                $scope.password = '';
            }
        );
    }
    
    $scope.submit = function () {
        if ($scope.regMode) {
            register();
        } else {
            login();
        }
    };
    
    $scope.resgierMode = function () {
        $scope.regMode = true;
    };
});
