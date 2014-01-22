'use strict';

angular.module('dutchpayApp').factory('UserService', function ($http, $location) {
    
    var model = {
            isLogin : function (callback) {
                this.getUserInfo(function (data) {
                    if (!!callback) {
                        callback(!!data.id);
                    }
                });
            },
            getUserInfo : function (callback) {
                
                $http.post('/api/user/info').
                success(function(data) {
                    if (!!callback) {
                        callback(data);
                    }
                }).
                error(function(xhr, data) {
                    console.log(data);
                    alert('error');
                });
                
            },
            login : function (user, success, error) {
                
                if (!user) {
                    throw new Error("empty user");
                }
                
                $http.post('/api/user/login', { id : user.id, password : user.password }).
                success(function(data) {
                    
                    if (!!data.id) {
                        if (!!success) {
                            success(data);
                        } else {
                            $location.url('/');
                        }
                    } else {
                        alert('로그인 정보가 올바르지 않습니다.');
                        if (!!error) {
                            error(data);
                        }
                    }
                }).
                error(function(xhr, data) {
                    console.log(data);
                    alert('error');
                });
            },
            logout : function () {
                
                $http.post('/api/user/logout').
                success(function(data) {
                    alert('로그아웃 되었습니다.');
                    $location.url('/');
                }).
                error(function(xhr, data) {
                    console.log(data);
                    alert('error');
                });
            },
            register : function (user, success, error) {
                
                if (!user) {
                    throw new Error("empty user");
                }
                
                $http.post('/api/user/register', { id : user.id, nick : user.nick, password : user.password }).
                success(function(data) {
                    
                    if (!!data.id) {
                        if (!!success) {
                            success(data);
                        } else {
                            alert('가입을 축하합니다.');
                            $location.url('/');
                        }
                    } else {
                        alert('가입이 정상 처리되지 않았습니다.');
                        if (!!error) {
                            error(data);
                        }
                    }
                }).
                error(function(xhr, data) {
                    console.log(data);
                    alert('error');
                });
            }
        };
    
    // Method for instantiating
    return model;
});
