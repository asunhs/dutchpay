'use strict';

angular.module('dutchpayApp').factory('UserService', function ($http) {

    // Method for instantiating
    return {
        login : function (user) {
            
            if (!user) {
                throw new Error("empty user");
            }
            
            $http.post('/api/login', { id : user.id, password : user.password }).error(function(xhr, data) {
                console.log(data);
                alert('error');
            });
        },
        register : function (user) {
            
            if (!user) {
                throw new Error("empty user");
            }
            
            $http.post('/api/register', { id : user.id, nick : user.nick, password : user.password })
            .error(function(xhr, data) {
                console.log(data);
                alert('error');
            });
        }
    };
});
