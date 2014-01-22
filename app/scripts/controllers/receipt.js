'use strict';

angular.module('dutchpayApp').controller('ReceiptCtrl', function ($scope) {

    $scope.search = {};
    
    $scope.searchUser = function () {
        
        if (!$scope.search.nick) {
            alert('찾을 사람을 적어주세요')
        }
        
        alert('Search!' + $scope.search.nick);
    }
    
});
