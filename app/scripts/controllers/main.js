'use strict';

angular.module('dutchpayApp').controller('MainCtrl', function ($scope, $http, UserService) {
    
    UserService.getUserInfo(function (info) {
        $scope.user = info;
    });
    
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
        $scope.awesomeThings = awesomeThings;
    });
});
