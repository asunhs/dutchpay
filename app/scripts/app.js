'use strict';

angular.module('dutchpayApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
]).
config(function ($routeProvider, $locationProvider) {
    $routeProvider.
    when('/main', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
    }).
    when('/user/:action', {
        templateUrl: 'partials/user',
        controller: 'UserCtrl'
    }).
    when('/receipts', {
        templateUrl: 'partials/receipts',
        controller: 'ReceiptsCtrl'
    }).
    when('/receipts/new', {
        templateUrl: 'partials/receipt',
        controller: 'ReceiptCtrl'
    }).
    otherwise({
        redirectTo: '/main'
    });
    
    
    $locationProvider.html5Mode(true);
});