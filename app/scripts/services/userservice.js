'use strict';

angular.module('dutchpayApp').factory('UserService', function ($http, UserModel) {

    // Method for instantiating
    return {
        login : function (user) {
            
            if (!user) {
                throw new Error("empty user");
            }
            
            $http.post('/api/user/login', { id : user.id, password : user.password }).
            success(function(data) {
                UserModel.set(data);
                
                console.log(UserModel);
            }).
            error(function(xhr, data) {
                console.log(data);
                alert('error');
            });
        },
        register : function (user) {
            
            if (!user) {
                throw new Error("empty user");
            }
            
            $http.post('/api/user/register', { id : user.id, nick : user.nick, password : user.password }).
            success(function(data) {
                UserModel.set(data);
                
                console.log(UserModel);
            }).
            error(function(xhr, data) {
                console.log(data);
                alert('error');
            });
        }
    };
});
