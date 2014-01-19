'use strict';

angular.module('dutchpayApp').controller('UserCtrl', function ($scope, UserService) {
    $scope.user = UserService;
    $scope.regMode = false;
    
    function login() {
        UserService.login({
            id : $scope.id,
            password : $scope.password
        });
    }
    
    function register() {
        UserService.register({
            id : $scope.id,
            nick : $scope.nick,
            password : $scope.password
        });
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
