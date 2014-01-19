'use strict';

angular.module('dutchpayApp').controller('UserCtrl', function ($scope, UserService) {
    $scope.user = UserService;
    
    $scope.login = function () {
        UserService.login({
            id : $scope.id,
            password : $scope.password
        });
    };
});
