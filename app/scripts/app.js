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
    when('/login', {
        templateUrl: 'partials/user',
        controller: 'UserCtrl'
    }).
    otherwise({
        redirectTo: '/main'
    });
    
    
    $locationProvider.html5Mode(true);
});